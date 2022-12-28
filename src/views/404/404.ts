import { Block } from '../../utils/block/block';
import { BaseLink } from '../../components/links/link-mixin';
import template from './404.pug';
import './404.scss';

interface ErrorProps {
  errorMessageCode: string;
  errorMessageText: string;
  href: string;
  message: string;
}

export class Page404 extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }
  init() {
    this.children.link = new BaseLink({
      content: 'Назад к чатам',
      href: '/',
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
