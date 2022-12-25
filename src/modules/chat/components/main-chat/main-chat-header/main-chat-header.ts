import { Block } from '../../../../../utils/block/block';
import template from './main-chat-header.pug';

interface MainChatHeaderProps {
  username?: string;
  img?: string;
}

export class MainChatHeader extends Block {
  constructor(props: MainChatHeaderProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
