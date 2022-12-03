import { Block } from '../../utils/block/block';
import { ProfileCardInput } from '../inputs/profile-inputs/profile-input-mixin';
import { BaseLink } from '../links/link-mixin';
import template from './profile-card-mixin.pug';
import './profile-card-mixin.scss';

interface ProfileCardProps {
  userInfoName: string;
  img: string;
}

export class ProfileCard extends Block {
  constructor(props: ProfileCardProps) {
    super('main', props);
    this.element!.classList.add('profile-card');
  }

  init() {
    this.children.email = new ProfileCardInput({
      name: 'email',
      type: 'text',
      label: 'Почта',
      body: 'temp@a.ru',
    });
    this.children.login = new ProfileCardInput({
      name: 'login',
      type: 'text',
      label: 'Логин',
      body: 'ivan',
    });
    this.children.name = new ProfileCardInput({
      name: 'name',
      type: 'text',
      label: 'Имя',
      body: 'iv',
    });
    this.children.secondName = new ProfileCardInput({
      name: 'second_name',
      type: 'text',
      label: 'Фамилия',
      body: 'test',
    });
    this.children.username = new ProfileCardInput({
      name: 'username',
      type: 'text',
      label: 'Имя в чате',
      body: 'tester',
    });
    this.children.phone = new ProfileCardInput({
      name: 'phone',
      type: 'text',
      label: 'Телефон',
      body: '+7 (123) 123 12 32',
    });

    this.children.updateInfoLink = new BaseLink({
      content: 'Изменить данные',
      href: '../../views/profile/profile-update-info/profile-update-info.pug',
      extraClass: 'profile__link',
    });
    this.children.updatePasswordLink = new BaseLink({
      content: 'Изменить пароль',
      href: '../../views/profile/profile-update-password/profile-update-password.pug',
      extraClass: 'profile__link',
    });
    this.children.exitLink = new BaseLink({
      content: 'Выйти',
      href: '../../views/chat/chat.pug',
      extraClass: 'profile__link_exit',
    });
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
