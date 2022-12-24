import { Block } from '../../../utils/block/block';
import template from './profile-input-mixin.pug';
import './profile-input-mixin.scss';

interface ProfileCardInputProps {
  name: string;
  body: string;
  label: string;
  is_input?: boolean;
  placeholder?: string;
  type: string;
  error?: string;
  events?: {
    focusin: () => void;
    focusout: () => void;
  };
}

export class ProfileCardInput extends Block {
  constructor(props: ProfileCardInputProps) {
    super(props);
    // this.element!.classList.add('profile-card__field');
  }

  render() {
    return this.compile(template, this.props);
  }
}
