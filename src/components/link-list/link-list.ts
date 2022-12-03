import { Block } from '../../utils/block/block';
import template from './link-list.pug';
import './link-list.scss';

interface LinkListProps {
  href: string;
  value: string;
}

export class LinkList extends Block {
  constructor(propsObj: LinkListProps) {
    super('div', propsObj);
  }

  render() {
    return this.compile(template, this.props);
  }
}
