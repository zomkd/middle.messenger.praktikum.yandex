import { Block } from '../../../../../utils/block/block';
import template from './user-chats.pug';
import './user-chats.scss';
import { withStore } from '../../../../../hocs/withStore';
import { ChatInfo } from '../../../../../api/ChatsAPI';

interface UserChatsProps {
  id: number;
  title: string;
  unread_count: number;
  selectedChat: ChatInfo;
  events: {
    click: () => void;
  };
}

export class UserChatsBase extends Block {
  constructor(props: UserChatsProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export const withSelectedChat = withStore((state) => ({
  selectedChat: (state.chats || []).find(({ id }) => id === state.selectedChat),
}));

export const UserChats = withSelectedChat(UserChatsBase);
