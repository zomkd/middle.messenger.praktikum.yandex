import { Block } from '../../../utils/block/block';
import template from './profile-input-mixin.pug';
import './profile-input-mixin.scss';

interface ProfileCardInputProps {
  name: string;
  body?: string;
  label: string;
  is_input?: boolean;
  placeholder?: string;
  type: string;
  error?: string;
  events?: {
    focusin: (e: Event) => void;
    focusout: (e: Event) => void;
  };
}

export class ProfileCardInput extends Block {
  constructor(props: ProfileCardInputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
