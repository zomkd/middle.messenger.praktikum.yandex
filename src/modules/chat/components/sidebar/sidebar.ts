import { Block } from '../../../../utils/block/block';
import template from './sidebar.pug';
import { BaseLink } from '../../../../components/links/link-mixin';
import { Input } from '../../../..//components/inputs/input-mixin';
import { UserChats } from './user-chats/user-chats';

interface SidebarProps {
  title: string;
  img: string;
}

export class Sidebar extends Block {
  constructor(props: SidebarProps) {
    super('main', props);
    this.element!.classList.add('sidebar');
  }

  init() {
    this.children.profileLink = new BaseLink({
      content: '',
      href: '../signUp/signUp.pug',
      extraClass: 'sidebar__link',
    });
    this.children.searchLink = new Input({
      name: 'search',
      type: 'text',
      placeholder: 'Поиск',
    });
    this.children.userChat1 = new UserChats({
      href: 'img',
      name: 'Dean',
      message: 'whats up!',
      time: '11:12',
      newMessageCount: 3,
      events: {
        click: () => {
          if (
            document.getElementsByClassName('empty-chat')[0].style.display !==
            'none'
          ) {
            document.getElementsByClassName('empty-chat')[0].style.display =
              'none';
            document.getElementsByClassName('messages')[0].style.display =
              'block';
          } else {
            document.getElementsByClassName('empty-chat')[0].style.display =
              'flex';
            document.getElementsByClassName('messages')[0].style.display =
              'none';
          }
        },
      },
    });
    this.children.userChat2 = new UserChats({
      href: 'img',
      name: 'Fox',
      message: 'yo',
      time: '11:42',
      newMessageCount: 1,
      events: {
        click: () => {
          if (
            document.getElementsByClassName('empty-chat')[0].style.display !==
            'none'
          ) {
            document.getElementsByClassName('empty-chat')[0].style.display =
              'none';
            document.getElementsByClassName('messages')[0].style.display =
              'block';
          } else {
            document.getElementsByClassName('empty-chat')[0].style.display =
              'flex';
            document.getElementsByClassName('messages')[0].style.display =
              'none';
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
