import { Block } from '../../../utils/block/block';
import { ProfileCardInput } from '../../../components/inputs/profile-inputs/profile-input-mixin';
import { Button } from '../../../components/buttons/button-mixin';
import { validate } from '../../../utils/validator/validator';
import { serializer } from '../../../utils/serializer/serializer';
import template from './profile-update-info.pug';
import '../../../components/profile-card/profile-card-mixin.scss';
import './profile-update-info.scss';

export class ProfileUpdateInfo extends Block {
  constructor() {
    super('main', {});
  }
  validateBlock(event: Event): void {
    const element = event.target as HTMLInputElement;
    if (validate(element)) {
      element.classList.add('invalid');
    } else {
      element.classList.remove('invalid');
    }
  }

  init() {
    this.children.email = new ProfileCardInput({
      name: 'email',
      type: 'text',
      label: 'Почта',
      body: 'temp@a.ru',
      is_input: true,
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    });
    this.children.login = new ProfileCardInput({
      name: 'login',
      type: 'text',
      label: 'Логин',
      body: 'ivan',
      is_input: true,
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    });
    this.children.firstName = new ProfileCardInput({
      name: 'first_name',
      type: 'text',
      label: 'Имя',
      body: 'iv',
      is_input: true,
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    });
    this.children.secondName = new ProfileCardInput({
      name: 'second_name',
      type: 'text',
      label: 'Фамилия',
      body: 'test',
      is_input: true,
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    });
    this.children.username = new ProfileCardInput({
      name: 'username',
      type: 'text',
      label: 'Имя в чате',
      body: 'tester',
      is_input: true,
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    });
    this.children.phone = new ProfileCardInput({
      name: 'phone',
      type: 'text',
      label: 'Телефон',
      body: '+7 (123) 123 12 32',
      is_input: true,
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
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
    console.log('sad');
    const fields = ['email', 'login', 'first_name', 'second_name', 'phone'];
    serializer(e, fields);
  }

  render() {
    return this.compile(template, this.props);
  }
}
