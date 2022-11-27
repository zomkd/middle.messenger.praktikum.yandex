import { Block } from '../../utils/block/block';
import template from './button-mixin.pug';
import './button-mixin.scss';

interface ButtonProps {
  type?: string;
  content: string;
  btnClass: string;
  events?: {
    click: () => void;
  };
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super('div', props);
    this.element!.classList.add('form-button');
  }

  render() {
    return this.compile(template, this.props);
  }
}
