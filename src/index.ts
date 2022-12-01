import { Page404 } from './views/404/404';
import { Page500 } from './views/500/500';
import { SignIn } from './views/auth/signIn/signIn';
import { SignUp } from './views/auth/signUp/signUp';
import { Chat } from './views/chat/chat';
import { Profile } from './views/profile/profile';
import { ProfileUpdateInfo } from './views/profile/profile-update-info/profile-update-info';
import { ProfileUpdatePassword } from './views/profile/profile-update-password/profile-update-password';
import { LinkList } from './components/link-list/link-list';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;
  const path = document.location.pathname;

  const signIn = new SignIn({ title: 'Войти' });
  const signUp = new SignUp({ title: 'Регистрация' });
  const chat = new Chat({ title: 'Регистрация' });
  const profile = new Profile();
  const profileInfo = new ProfileUpdateInfo();
  const profilePassword = new ProfileUpdatePassword();

  const page404 = new Page404({
    errorMessageCode: '404',
    errorMessageText: 'Не туда попали',
    href: '/',
    message: 'Назад',
  });
  const page500 = new Page500({
    errorMessageCode: '500',
    errorMessageText: 'Мы уже фиксим',
    href: '/',
    message: 'Назад',
  });

  const linkSignIn = new LinkList({
    href: 'src/views/auth/signIn/signIn.pug',
    value: 'signIn',
  });
  const linkSignUp = new LinkList({
    href: 'src/views/auth/signUp/signUp.pug',
    value: 'signUp',
  });
  const linkChat = new LinkList({
    href: 'src/views/chat/chat.pug',
    value: 'chat',
  });
  const linkProfile = new LinkList({
    href: 'src/viewsprofile/profile.pug',
    value: 'profile',
  });
  const linkUpdateProfile = new LinkList({
    href: 'src/views/profile/profile-update-info/profile-update-info.pug',
    value: 'update profile',
  });
  const linkUpdatePassword = new LinkList({
    href: 'src/views/profile/profile-update-password/profile-update-password.pug',
    value: 'update password',
  });
  const linkPage404 = new LinkList({
    href: 'src/views/404/404.pug',
    value: 'page 404',
  });
  const linkPage500 = new LinkList({
    href: 'src/views/500/500.pug',
    value: 'page 500',
  });

  root.append(linkSignIn.getContent()!);
  root.append(linkSignUp.getContent()!);
  root.append(linkChat.getContent()!);
  root.append(linkProfile.getContent()!);
  root.append(linkUpdatePassword.getContent()!);
  root.append(linkUpdateProfile.getContent()!);
  root.append(linkPage404.getContent()!);
  root.append(linkPage500.getContent()!);

  switch (path) {
    case '/src/views/auth/signIn/signIn.pug':
      root.replaceChildren(signIn.getContent()!);
      signIn.dispatchComponentDidMount();
      break;
    case '/src/views/auth/signUp/signUp.pug':
      root.replaceChildren(signUp.getContent()!);
      signUp.dispatchComponentDidMount();
      break;
    case '/src/views/404/404.pug':
      root.replaceChildren(page404.getContent()!);
      page404.dispatchComponentDidMount();
      break;
    case '/src/views/500/500.pug':
      root.replaceChildren(page500.getContent()!);
      page500.dispatchComponentDidMount();
      break;
    case '/src/views/chat/chat.pug':
      root.replaceChildren(chat.getContent()!);
      chat.dispatchComponentDidMount();
      break;
    case '/src/viewsprofile/profile.pug':
      root.replaceChildren(profile.getContent()!);
      profile.dispatchComponentDidMount();
      break;
    case '/src/views/profile/profile-update-info/profile-update-info.pug':
      root.replaceChildren(profileInfo.getContent()!);
      profileInfo.dispatchComponentDidMount();
      break;
    case '/src/views/profile/profile-update-password/profile-update-password.pug':
      root.replaceChildren(profilePassword.getContent()!);
      profilePassword.dispatchComponentDidMount();
      break;
  }
});
