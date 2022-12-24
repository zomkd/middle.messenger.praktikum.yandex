import { isEqual } from '../router/helpers';
import store, { StoreEvents } from '../store/store';

export function withStore(mapStateToProps: (state) => any) {
  return function wrap(Component) {
    let previousState: any = null;

    return class WithStore extends Component {
      constructor(props: any) {
        previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState });

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          if (isEqual(previousState, stateProps)) {
            return;
          }

          this.setProps({ ...stateProps });
        });
      }
    };
  };
}
