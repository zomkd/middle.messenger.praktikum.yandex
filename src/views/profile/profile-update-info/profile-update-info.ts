import { Block } from '../../../utils/block/block';
import { ProfileCardInput } from '../../../components/inputs/profile-inputs/profile-input-mixin';
import { Button } from '../../../components/buttons/button-mixin';
import { validateBlock } from '../../../utils/validator/validator';
import { serializer } from '../../../utils/serializer/serializer';
import template from './profile-update-info.pug';
import '../../../components/profile-card/profile-card-mixin.scss';
import './profile-update-info.scss';
import store from '../../../store/store';
import UserController from '../../../controllers/UserController';

export class ProfileUpdateInfo extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.email = new ProfileCardInput({
      name: 'email',
      type: 'text',
      label: 'Почта',
      body: store.getState().user.data.email,
      is_input: true,
      error: 'Неверный формат',
      events: {
        focusout: (event: Event) => validateBlock(event),
        focusin: (event: Event) => validateBlock(event),
      },
    });
    this.children.login = new ProfileCardInput({
      name: 'login',
      type: 'text',
      label: 'Логин',
      body: store.getState().user.data.login,
      is_input: true,
      error: 'Недостаточное количество символов или неверный формат',
      events: {
        focusout: (event: Event) => validateBlock(event),
        focusin: (event: Event) => validateBlock(event),
      },
    });
    this.children.firstName = new ProfileCardInput({
      name: 'first_name',
      type: 'text',
      label: 'Имя',
      body: store.getState().user.data.first_name,
      is_input: true,
      error: 'Недостаточное количество символов или неверный формат',
      events: {
        focusout: (event: Event) => validateBlock(event),
        focusin: (event: Event) => validateBlock(event),
      },
    });
    this.children.secondName = new ProfileCardInput({
      name: 'second_name',
      type: 'text',
      label: 'Фамилия',
      body: store.getState().user.data.second_name,
      error: 'Недостаточное количество символов или неверный формат',
      is_input: true,
      events: {
        focusout: (event: Event) => validateBlock(event),
        focusin: (event: Event) => validateBlock(event),
      },
    });
    this.children.displayName = new ProfileCardInput({
      name: 'display_name',
      type: 'text',
      label: 'Имя в чате',
      body: store.getState().user.data.display_name,
      is_input: true,
      error: 'Недостаточное количество символов или неверный формат',
      events: {
        focusout: (event: Event) => validateBlock(event),
        focusin: (event: Event) => validateBlock(event),
      },
    });
    this.children.phone = new ProfileCardInput({
      name: 'phone',
      type: 'text',
      label: 'Телефон',
      body: store.getState().user.data.phone,
      error: 'Недостаточное количество символов или неверный формат',
      is_input: true,
      events: {
        focusout: (event: Event) => validateBlock(event),
        focusin: (event: Event) => validateBlock(event),
      },
    });
    this.children.button = new Button({
      type: 'submit',
      btnClass: 'save-changes',
      content: 'Сохранить',
      events: {
        click: (e) => this.onSubmit(e),
      },
    });
  }

  onSubmit(e) {
    const fields = [
      'email',
      'login',
      'first_name',
      'second_name',
      'phone',
      'display_name',
    ];
    const dataForm = serializer(e, fields);
    UserController.profile(dataForm);
  }

  render() {
    return this.compile(template, this.props);
  }
}
