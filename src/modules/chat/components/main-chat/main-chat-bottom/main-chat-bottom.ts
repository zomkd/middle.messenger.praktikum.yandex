import { Block } from '../../../../../utils/block/block';
import { Input } from '../../../../../components/inputs/input-mixin';
import { validate } from '../../../../../utils/validator/validator';
import { BaseLink } from '../../../../../components/links/link-mixin';

import template from './main-chat-bottom.pug';

interface MainChatBottomProps {
  imgSend: string;
  imgAttach: string;
}
export class MainChatBottom extends Block {
  constructor(props: MainChatBottomProps) {
    super(props);
    // this.element!.classList.add('main-chat__bottom');
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
    this.children.input = new Input({
      name: 'message',
      type: 'textarea',
      label: '',
      placeholder: 'Сообщение',
      events: {
        focusout: this.validateBlock.bind(this),
        focusin: this.validateBlock.bind(this),
      },
    });
    this.children.attachLink = new BaseLink({});
    this.children.sendLink = new BaseLink({
      href: '',
      events: {
        click: (e) => this.onSubmit(e),
      },
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const inputs = ['message'];
    const formData: { [index: string]: any } = {};
    let isFormValid = true;
    inputs.map((input) => {
      const el = document.getElementsByName(input)[0];
      if (validate(el as HTMLInputElement)) {
        isFormValid = false;
      } else {
        const name = el.getAttribute('name');
        const { value } = el as HTMLInputElement;
        if (name) {
          formData[name] = value;
        }
      }
    });
    if (isFormValid) {
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}
