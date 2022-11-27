import { Block } from '../../../utils/block/block';
import { Button } from '../../../components/buttons/button-mixin';
import { Input } from '../../../components/inputs/input-mixin';
import { BaseLink } from '../../../components/links/link-mixin';
import { validate } from '../../../utils/validator/validator';
import { serializer } from '../../../utils/serializer/serializer';
import template from './signUp.pug';
import './signUp.scss';

interface SignUpProps {
  title: string;
}

export class SignUp extends Block {
  constructor(props: SignUpProps) {
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
    this.children.email = new Input({
      name: 'email',
      type: 'text',
      label: 'Почта',
      placeholder: '',
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    });

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

    this.children.firstName = new Input({
      name: 'first_name',
      type: 'text',
      label: 'Имя',
      placeholder: '',
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    });

    this.children.secondName = new Input({
      name: 'second_name',
      type: 'text',
      label: 'Фамилия',
      placeholder: '',
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    });

    this.children.phone = new Input({
      name: 'phone',
      type: 'text',
      label: 'Телефон',
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

    this.children.repeatPassword = new Input({
      name: 'repeatPassword',
      type: 'password',
      label: 'Пароль (ещё раз)',
      placeholder: '',
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    });

    this.children.button = new Button({
      type: 'submit',
      content: 'Зарегистрироваться',
      btnClass: 'sign-up',
      events: {
        click: (e) => this.onSubmit(e),
      },
    });

    this.children.link = new BaseLink({
      content: 'Войти',
      href: '../../chat/chat.pug',
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const fields = [
      'email',
      'login',
      'first_name',
      'second_name',
      'phone',
      'password',
      'repeatPassword',
    ];
    serializer(e, fields);
  }

  render() {
    return this.compile(template, this.props);
  }
}
