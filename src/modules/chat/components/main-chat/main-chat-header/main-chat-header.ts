import { Block } from '../../../../../utils/block/block';
import { Input } from '../../../../../components/inputs/input-mixin';
import { Button } from '../../../../../components/buttons/button-mixin';
import store from '../../../../../store/store';
import ChatsController from '../../../../../controllers/ChatsController';
import template from './main-chat-header.pug';

interface MainChatHeaderProps {
  username?: string;
  img?: string;
}

export class MainChatHeader extends Block {
  constructor(props: MainChatHeaderProps) {
    super(props);
  }

  init() {
    this.children.deleteLink = new Input({
      name: 'search',
      type: 'text',
      placeholder: 'Удалить пользователя по id',
    });
    this.children.deleteUserToChat = new Button({
      type: 'submit',
      content: 'Удалить',
      events: {
        click: async () => {
          const input = this.children.deleteLink as Input;
          const deleteUserId = input.getValue();
          ChatsController.deleteUserToChat(
            store.getState().selectedChat,
            deleteUserId,
          );
          input.setValue('');
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
