import { Block } from '../../utils/block/block';
import template from './message.pug';
import './message.scss';
interface MessageProps {
  content: string;
  isMine: boolean;
}

export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
