import { Block } from '../../../../../utils/block/block';
import template from './main-chat-header.pug';

interface MainChatHeaderProps {
  username: string;
}

export class MainChatHeader extends Block {
  constructor(props: MainChatHeaderProps) {
    super('div', props);
    this.element!.classList.add('main-chat-header__block');
  }

  render() {
    return this.compile(template, this.props);
  }
}
