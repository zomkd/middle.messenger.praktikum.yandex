import { Block } from '../../utils/block/block';
import template from './avatar.pug';
import './avatar.scss';

interface AvatarProps {
  img?: string;
  events?: {
    change: () => void;
  };
}

export class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
