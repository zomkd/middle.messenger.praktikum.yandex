import WSTransport, {
  WSTransportEvents,
} from '../utils/wsTransport/WSTransport';
import store from '../store/store';

export interface Message {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
}

class MessagesController {
  private sockets: Map<number, WSTransport> = new Map();

  async connect(id: number, token: string) {
    if (this.sockets.has(id)) {
      return;
    }
    const userId = store.getState().user.data.id;

    const wsTransport = new WSTransport(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`,
    );

    this.sockets.set(id, wsTransport);

    await wsTransport.connect();

    this.subscribe(wsTransport, id);
    this.fetchOldMessages(id);
  }

  sendMessage(id: number, message: string) {
    const socket = this.sockets.get(id);
    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({
      type: 'message',
      content: message,
    });
  }

  fetchOldMessages(id: number) {
    const socket = this.sockets.get(id);

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({ type: 'get old', content: '0' });
  }

  closeAll() {
    Array.from(this.sockets.values()).forEach((socket) => socket.close());
  }

  private onMessage(id: number, messages: Message | Message[]) {
    let type;
    if (Array.isArray(messages)) {
      type = 'messages';
    } else {
      type = messages.type;
    }
    const oldMessages = (store.getState().messages || {})[id] || [];
    switch (type) {
      case 'message': {
        store.set(`messages.${id}`, [...oldMessages, messages]);
        break;
      }
      case 'messages': {
        store.set(`messages.${id}`, [
          ...oldMessages,
          ...(messages as Message[]),
        ]);
        break;
      }
    }
  }

  private onClose(id: number) {
    this.sockets.delete(id);
  }

  private subscribe(transport: WSTransport, id: number) {
    transport.on(WSTransportEvents.Message, (message) =>
      this.onMessage(id, message),
    );
    transport.on(WSTransportEvents.Close, () => this.onClose(id));
  }
}

const controller = new MessagesController();

// // @ts-ignore
// window.messagesController = controller;

export default controller;
