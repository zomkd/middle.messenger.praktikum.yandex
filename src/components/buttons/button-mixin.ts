import { Block } from '../../utils/block/block';
import template from './button-mixin.pug';
import './button-mixin.scss';

interface ButtonProps {
  type?: string;
  content?: string;
  btnClass?: string;
  events?: {
    click: () => void;
  };
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
