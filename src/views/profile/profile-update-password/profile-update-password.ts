import { Block } from '../../../utils/block/block';
import { ProfileCardInput } from '../../../components/inputs/profile-inputs/profile-input-mixin';
import { Button } from '../../../components/buttons/button-mixin';
import { validateBlock } from '../../../utils/validator/validator';
import { serializer } from '../../../utils/serializer/serializer';
import template from './profile-update-password.pug';
import '../../../components/profile-card/profile-card-mixin.scss';
import './profile-update-password.scss';

export class ProfileUpdatePassword extends Block {
  constructor() {
    super('main', {});
  }
  init() {
    this.children.oldPassword = new ProfileCardInput({
      name: 'oldPassword',
      type: 'password',
      label: 'Старый пароль',
      error: 'Неверный паорль',
      body: 'temp@a.ru',
      is_input: true,
      events: {
        focusout: (event: Event) => validateBlock(event),
        focusin: (event: Event) => validateBlock(event),
      },
    });
    this.children.newPassword = new ProfileCardInput({
      name: 'newPassword',
      type: 'password',
      error: 'Недостаточное количество символов',
      label: 'Новый пароль',
      body: 'ivan',
      is_input: true,
      events: {
        focusout: (event: Event) => validateBlock(event),
        focusin: (event: Event) => validateBlock(event),
      },
    });
    this.children.repeatPassword = new ProfileCardInput({
      name: 'repeatPassword',
      type: 'password',
      label: 'Повтороите новый пароль',
      error: 'Пароли не совпадают',
      body: 'iv',
      is_input: true,
      events: {
        focusout: (event: Event) => validateBlock(event),
        focusin: (event: Event) => validateBlock(event),
      },
    });
    this.children.button = new Button({
      type: 'submit',
      btnClass: 'save-changes-password',
      content: 'Сохранить',
      events: {
        click: (e) => this.onSubmit(e),
      },
    });
  }

  onSubmit(e) {
    const fields = ['oldPassword', 'newPassword', 'repeatPassword'];
    serializer(e, fields);
  }

  render() {
    return this.compile(template, this.props);
  }
}
