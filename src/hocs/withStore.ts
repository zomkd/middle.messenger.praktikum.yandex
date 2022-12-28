import { isEqual } from '../router/helpers';
import store, { StoreEvents } from '../store/store';
import { Block } from '../utils/block/block';
import { User } from '../api/AuthAPI';
import { ChatInfo } from '../api/ChatsAPI';
import { Message } from '../controllers/MessagesController';

interface State {
  user?: User;
  chats?: ChatInfo[];
  messages?: Record<number, Message[]>;
  selectedChat?: number;
}
export function withStore(mapStateToProps: (state: State) => any) {
  return function wrap(Component: typeof Block) {
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
