import { Block } from '../../../../utils/block/block';
import template from './main-chat.pug';
import { MainChatHeader } from './main-chat-header/main-chat-header';
import { MainChatBottom } from './main-chat-bottom/main-chat-bottom';
import { MainChatDialogs } from './main-chat-dialogs/main-chat-dialogs';
import sendIcon from '../../../../assets/icons/send-icon.svg';
import attachIcon from '../../../../assets/icons/attach-icon.svg';

export class MainChat extends Block {
  constructor() {
    super('main', {});
    this.element!.classList.add('main-chat');
  }

  init() {
    this.children.header = new MainChatHeader({
      username: 'Unknown',
    });
    this.children.dialogs = new MainChatDialogs({
      content: 'Выберите чат чтобы отправить сообщение',
    });
    this.children.bottom = new MainChatBottom({
      imgSend: sendIcon as string,
      imgAttach: attachIcon as string,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
