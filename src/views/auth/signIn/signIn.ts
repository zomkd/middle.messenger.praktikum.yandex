import { Button } from '../../../components/buttons/button-mixin';
import { Block } from '../../../utils/block/block';
import { Input } from '../../../components/inputs/input-mixin';
import { BaseLink } from '../../../components/links/link-mixin';
import { validateBlock } from '../../../utils/validator/validator';
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

  init() {
    this.children.login = new Input({
      name: 'login',
      type: 'text',
      label: 'Логин',
      placeholder: '',
      error: 'Логин должен содержать больше 3х символов',
      events: {
        focusout: (event: Event) => validateBlock(event),
        focusin: (event: Event) => validateBlock(event),
      },
    });

    this.children.password = new Input({
      name: 'password',
      type: 'password',
      label: 'Пароль',
      placeholder: '',
      error: 'Недопустимые символы',
      events: {
        focusout: (event: Event) => validateBlock(event),
        focusin: (event: Event) => validateBlock(event),
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
      href: 'src/views/auth/signUp/signUp.pug',
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
