import { Button } from '../../../components/buttons/button-mixin';
import { Block } from '../../../utils/block/block';
import { Input } from '../../../components/inputs/input-mixin';
import { BaseLink } from '../../../components/links/link-mixin';
import { validate } from '../../../utils/validator/validator';
import { serializer } from '../../../utils/serializer/serializer';
import template from './signIn.pug';
import './signIn.scss';

interface SignInProps {
  title: string;
}

export class SignIn extends Block {
  constructor(props: SignInProps) {
    super('main', props);
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
    this.children.login = new Input({
      name: 'login',
      type: 'text',
      label: 'Логин',
      placeholder: '',
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    });

    this.children.password = new Input({
      name: 'password',
      type: 'password',
      label: 'Пароль',
      placeholder: '',
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    });

    this.children.button = new Button({
      type: 'submit',
      content: 'Авторизоваться',
      btnClass: 'sign-in-btn',
      events: {
        click: (e) => this.onSubmit(e),
      },
    });

    this.children.link = new BaseLink({
      content: 'Нет аккаунта?',
      href: '../signUp/signUp.pug',
    });
  }
  onSubmit(e) {
    const fields = ['login', 'password'];
    serializer(e, fields);
  }

  render() {
    return this.compile(template, this.props);
  }
}
