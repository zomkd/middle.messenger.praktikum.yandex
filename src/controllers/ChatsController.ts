import API, { ChatsAPI } from '../api/ChatsAPI';
import store from '../store/store';
import MessagesController from './MessagesController';
import AuthController from './AuthController';

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    try {
    await this.api.create(title);

    this.fetchChats();
    } catch (e: any) {
      store.set('user.error', e);
    }
    
  }

  async fetchChats() {
    try {
    await AuthController.fetchUser();
    const chats = await this.api.read();

    chats.map(async (chat) => {
      const token = await this.getToken(chat.id);

      await MessagesController.connect(chat.id, token);
    }
    )
    
    store.set('chats', chats);
  } catch (e: any) {
    store.set('user.error', e);
  };

  }

  addUserToChat(id: number, userId: number) {
    try {
    this.api.addUsers(id, [userId]);
  } catch (e: any) {
    store.set('user.error', e);
  }
  }

  async delete(id: number) {
    try {
    await this.api.delete(id);

    this.fetchChats();
  } catch (e: any) {
    store.set('user.error', e);
  }
  }

  getToken(id: number) {
    try {
    return this.api.getToken(id);
  } catch (e: any) {
    store.set('user.error', e);
  }
  }

  selectChat(id: number) {
    store.set('selectedChat', id);
  }
}

export default new ChatsController();
