import { Block } from '../../utils/block/block';
import template from './input-mixin.pug';
import './input-mixin.scss';

interface InputProps {
  name: string;
  type: string;
  label?: string;
  placeholder: string;
  error?: string;
  events?: {
    focusin: (event: Event) => void;
    focusout: (event: Event) => void;
  };
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super('div', props);
    this.element!.classList.add('input');
  }

  render() {
    return this.compile(template, this.props);
  }
}
