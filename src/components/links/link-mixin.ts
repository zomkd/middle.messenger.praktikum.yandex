import { Block } from '../../utils/block/block';
import template from './link-mixin.pug';
import { PropsWithRouter, withRouter } from '../../hocs/withRouter';
import './link-mixin.scss';

interface LinkProps extends PropsWithRouter {
  extraClass?: string;
  content?: string;
  to?: string;
  imgSrc?: string;
  events?: {
    click: (e: Event) => void;
  };
}

export class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => this.navigate(),
      },
    });
  }

  navigate() {
    this.props.router!.go(this.props.to!);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const Link = withRouter(BaseLink as any);
