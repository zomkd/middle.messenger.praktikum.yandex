import { Block } from '../utils/block/block';
import Router from '../router/router';

export function withRouter(Component: typeof Block) {
  type Props = typeof Component extends typeof Block<
    infer P extends Record<string, any>>
    ? P
    : any;

  return class WithRouter extends Component {
    constructor(props: Props & PropsWithRouter) {
      super({ ...props, router: Router });
    }
  };
}

export interface PropsWithRouter {
  router?: typeof Router;
  // content?: string;
  // to?: string;
}
