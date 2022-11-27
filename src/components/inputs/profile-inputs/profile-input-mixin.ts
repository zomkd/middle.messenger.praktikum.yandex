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
  events?: {
    focusin: any;
    focusout: any;
  };
}

export class ProfileCardInput extends Block {
  constructor(props: ProfileCardInputProps) {
    super('div', props);
    this.element!.classList.add('profile-card__field');
  }

  // onSubmit() {
  //   const values = Object
  //     .values(this.children)
  //     .filter(child => child instanceof Input)
  //     .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

  //   const data = Object.fromEntries(values);

  //   AuthController.signin(data as SignupData);
  // }

  render() {
    return this.compile(template, this.props);
  }
}
