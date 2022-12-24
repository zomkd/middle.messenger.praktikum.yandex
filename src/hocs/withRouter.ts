import { Block } from '../utils/block/block';
import Router from '../router/router';

export function withRouter(Component: typeof Block) {
  return class WithRouter extends Component {
    constructor(props: typeof Component & PropsWithRouter) {
      super({ ...props, router: Router });
    }
  };
}

export interface PropsWithRouter {
  router: typeof Router;
}
