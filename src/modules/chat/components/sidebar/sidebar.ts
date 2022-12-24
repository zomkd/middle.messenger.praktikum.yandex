import { Block } from '../../../../utils/block/block';
import template from './sidebar.pug';
import { Link } from '../../../../components/links/link-mixin';
import { Input } from '../../../../components/inputs/input-mixin';
import { UserChats } from './user-chats/user-chats';
import store from '../../../../store/store';
import ChatsController from '../../../../controllers/ChatsController';
import { withStore } from '../../../../hocs/withStore';
import { ChatInfo } from '../../../../api/ChatsAPI';
import { Button } from '../../../../components/buttons/button-mixin';

interface SidebarProps {
  chats: ChatInfo[];
}
class SidebarBase extends Block {
  constructor(props: SidebarProps) {
    super({ ...props });
  }

  init() {
    this.children.profileLink = new Link({
      content: 'Профиль',
      to: '/profile',
      extraClass: 'sidebar__link',
    });
    this.children.addChat = new Button({
      type: 'submit',
      content: 'Создать чат',
      btnClass: 'create-chat',
      events: {
        click: async () => {
          await ChatsController.create('test chat');
        },
      },
    });
    this.children.chats = this.createChats(this.props);
    this.children.addLink = new Input({
      name: 'search',
      type: 'text',
      placeholder: 'Добавить пользователя по id',
    });
    this.children.addUserToChat = new Button({
      type: 'submit',
      content: 'Добавить',
      events: {
        click: async () => {
          const input = this.children.addLink as Input;
          const addUserId = input.getValue();
          ChatsController.addUserToChat(
            store.getState().selectedChat,
            addUserId,
          );
          input.setValue('');
        },
      },
    });
  }
  protected componentDidUpdate(
    oldProps: SidebarProps,
    newProps: SidebarProps,
  ): boolean {
    this.children.chats = this.createChats(newProps) as any;

    return true;
  }

  private createChats(props: SidebarProps) {
    return props.chats.map((data) => {
      return new UserChats({
        ...data,
        events: {
          click: () => {
            ChatsController.selectChat(data.id);
          },
        },
      });
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}

const withChats = withStore((state) => ({ chats: [...(state.chats || [])] }));

export const Sidebar = withChats(SidebarBase);
