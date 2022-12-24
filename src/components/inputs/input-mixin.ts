import { Block } from '../../utils/block/block';
import template from './input-mixin.pug';
import './input-mixin.scss';

interface InputProps {
  name: string;
  type: string;
  label?: string | undefined;
  placeholder: string;
  error?: string;
  events?: {
    focusin: (event: Event) => void;
    focusout: (event: Event) => void;
  };
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }
  public setValue(value: string) {
    return ((this.element as HTMLInputElement).childNodes[0]!.value = value);
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).childNodes[0]!.value;
  }
  render() {
    return this.compile(template, this.props);
  }
}
