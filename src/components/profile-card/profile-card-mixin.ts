import { Block } from '../../utils/block/block';
import { ProfileCardInput } from '../inputs/profile-inputs/profile-input-mixin';
import { Link } from '../links/link-mixin';
import AuthController from '../../controllers/AuthController';
import UserController from '../../controllers/UserController';
import { Avatar } from '../avatar/avatar';
import store from '../../store/store';
import { Button } from '../buttons/button-mixin';
import { withStore } from '../../hocs/withStore';
import template from './profile-card-mixin.pug';
import './profile-card-mixin.scss';

interface ProfileCardProps {
  userInfoName: string;
  img: string;
}
export class ProfileCard extends Block {
  constructor(props: ProfileCardProps) {
    super(props);
  }

  init() {
    this.children.avatar = new Avatar({
      img: !this.props.avatar
        ? ''
        : `https://ya-praktikum.tech/api/v2/resources${
            store.getState().user.data.avatar
          }`,
      events: {
        change: (e: any) => {
          e.preventDefault();
          const formData = new FormData();
          const input: any = document.querySelector('#avatar');
          formData.append('avatar', input?.files[0]);
          UserController.avatar(formData);
        },
      },
    });
    this.children.email = new ProfileCardInput({
      name: 'email',
      type: 'text',
      label: 'Почта',
      body: store.getState().user.data.email,
    });
    this.children.login = new ProfileCardInput({
      name: 'login',
      type: 'text',
      label: 'Логин',
      body: store.getState().user.data.login,
    });
    this.children.firstName = new ProfileCardInput({
      name: 'first_name',
      type: 'text',
      label: 'Имя',
      body: store.getState().user.data.first_name,
    });
    this.children.secondName = new ProfileCardInput({
      name: 'second_name',
      type: 'text',
      label: 'Фамилия',
      body: store.getState().user.data.second_name,
    });
    this.children.displayName = new ProfileCardInput({
      name: 'display_name',
      type: 'text',
      label: 'Имя в чате',
      body: store.getState().user.data.display_name,
    });
    this.children.phone = new ProfileCardInput({
      name: 'phone',
      type: 'text',
      label: 'Телефон',
      body: store.getState().user.data.phone,
    });

    this.children.updateInfoLink = new Link({
      content: 'Изменить данные',
      to: '/settings',
      extraClass: 'profile__link',
    });
    this.children.updatePasswordLink = new Link({
      content: 'Изменить пароль',
      to: '/change-password',
      extraClass: 'profile__link',
    });
    this.children.exitLink = new Button({
      content: 'Выйти',
      events: {
        click: () => {
          AuthController.logout();
        },
      },
      btnClass: 'profile__link_exit',
    });
  }

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    (this.children.avatar as Avatar).setProps({
      img:
        newProps.avatar === null
          ? ''
          : `https://ya-praktikum.tech/api/v2/resources${
              store.getState().user.data.avatar
            }`,
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore((store) => ({ ...store.user }));

export const ProfilePage = withUser(ProfileCard);
