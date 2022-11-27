import { Block } from '../../../../../utils/block/block';
import template from './user-chats.pug';
import './user-chats.scss';
import { SignupData } from '../../api/AuthAPI';

interface UserChatsProps {
  href: string;
  name: string;
  message: string;
  time: string;
  newMessageCount: number;
  events: {
    click: () => {};
  };
}

export class UserChats extends Block {
  constructor(props: UserChatsProps) {
    super('div', props);
    this.element!.classList.add('user-chats__block');
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
