import { Block } from '../../../../../utils/block/block';
import template from './main-chat-dialogs.pug';

interface MainChatDialogsProps {
  content: string;
}

export class MainChatDialogs extends Block {
  constructor(props: MainChatDialogsProps) {
    super(props);
    // this.element!.classList.add('main-chat-dialogs__block');
  }

  render() {
    return this.compile(template, this.props);
  }
}
