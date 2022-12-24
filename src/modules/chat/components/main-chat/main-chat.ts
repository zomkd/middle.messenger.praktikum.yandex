import { Block } from '../../../../utils/block/block';
import template from './main-chat.pug';
import { MainChatHeader } from './main-chat-header/main-chat-header';
import MessagesController, {
  Message as MessageInfo,
} from '../../../../controllers/MessagesController';
import AuthController from '../../../../controllers/AuthController';
import store from '../../../../store/store';
import { BaseLink } from '../../../../components/links/link-mixin';
import { Button } from '../../../../components/buttons/button-mixin';
import { Input } from '../../../../components/inputs/input-mixin';
import { validateBlock } from '../../../../utils/validator/validator';
import { withStore } from '../../../../hocs/withStore';
import { Message } from '../../../../components/messages/message';

interface MessengerProps {
  selectedChat: number | undefined;
  messages: MessageInfo[];
  userId: number | undefined;
}
export class MainChatBase extends Block {
  constructor(props: MessengerProps) {
    super(props);
  }

  init() {
    // AuthController.fetchUser()
    this.children.header = new MainChatHeader({
      username: store.getState().user.data.first_name,
      img:
        store.getState().user.data.avatar === null
          ? ''
          : `https://ya-praktikum.tech/api/v2/resources${
              store.getState().user.data.avatar
            }`,
    });
    this.children.dialogs = this.createMessages(this.props);
    this.children.input = new Input({
      name: 'message',
      type: 'textarea',
      placeholder: 'Сообщение',
      events: {
        focusout: (event: Event) => validateBlock(event),
        focusin: (event: Event) => validateBlock(event),
      },
    });
    this.children.attachLink = new BaseLink({});
    this.children.sendLink = new Button({
      content: 'Отправить',
      events: {
        click: () => {
          const input = this.children.input as Input;
          const message = input.getValue();
          MessagesController.sendMessage(this.props.selectedChat!, message);
          input.setValue('');
        },
      },
    });
  }
  async componentDidMount() {
    await AuthController.fetchUser();
  }

  protected componentDidUpdate(
    oldProps: MessengerProps,
    newProps: MessengerProps,
  ): boolean {
    this.children.dialogs = this.createMessages(newProps);

    return true;
  }
  private createMessages(props: MessengerProps) {
    return props.messages.map((data) => {
      return new Message({ ...data, isMine: props.userId === data.user_id });
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
const withSelectedChatMessages = withStore((state) => {
  const a = Object.keys(store.getState()).length === 0;
  const selectedChatId = state.selectedChat || null;
  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state?.user.data.id || 0,
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state?.user?.data.id || 0,
  };
});

export const MainChat = withSelectedChatMessages(MainChatBase);
