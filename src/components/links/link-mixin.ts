import { Block } from '../../utils/block/block';
import template from './link-mixin.pug';
import './link-mixin.scss';

interface LinkProps {
  extraClass?: string;
  content?: string;
  href?: string;
  imgSrc?: string;
  events?: {
    click: () => void;
  };
}

export class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
