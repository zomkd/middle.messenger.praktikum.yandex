import { Block } from '../../utils/block/block';
import { Sidebar } from '../../modules/chat/components/sidebar/sidebar';
import { MainChat } from '../../modules/chat/components/main-chat/main-chat';
import template from './chat.pug';
import lensIcon from '../../assets/icons/lens-icon.svg';
import ChatsController from '../../controllers/ChatsController';
import AuthController from '../../controllers/AuthController';
import './chat.scss';

interface ChatProps {
  title: string;
}

export class Chat extends Block {
  constructor(props: ChatProps) {
    super(props);
  }

  init() {
    ChatsController.fetchChats();
    AuthController.fetchUser();
    this.children.sidebar = new Sidebar({
      title: 'Профиль',
      img: lensIcon as string,
    });
    this.children.mainChat = new MainChat({});
    ChatsController.fetchChats().finally(() => {
      (this.children.sidebar as Block).setProps({});
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
