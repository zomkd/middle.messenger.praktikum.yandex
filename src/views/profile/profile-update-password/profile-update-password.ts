import { Block } from '../../../utils/block/block';
import { ProfileCardInput } from '../../../components/inputs/profile-inputs/profile-input-mixin';
import { Button } from '../../../components/buttons/button-mixin';
import { validateBlock } from '../../../utils/validator/validator';
import { serializer } from '../../../utils/serializer/serializer';
import UserController from '../../../controllers/UserController';
import template from './profile-update-password.pug';
import '../../../components/profile-card/profile-card-mixin.scss';
import './profile-update-password.scss';

export class ProfileUpdatePassword extends Block {
  constructor() {
    super({});
  }
  init() {
    this.children.oldPassword = new ProfileCardInput({
      name: 'oldPassword',
      type: 'password',
      label: 'Старый пароль',
      error: 'Неверный паорль',
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
    const fields = ['oldPassword', 'newPassword'];
    serializer(e, fields);
    let dataForm: any = {};
    dataForm = serializer(e, fields);
    console.log(dataForm);
    UserController.password(dataForm);
  }

  render() {
    return this.compile(template, this.props);
  }
}
