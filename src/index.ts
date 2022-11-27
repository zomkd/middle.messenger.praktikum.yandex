import { Page404 } from './views/404/404';
import { Page500 } from './views/500/500';
import { SignIn } from './views/auth/signIn/signIn';
import { SignUp } from './views/auth/signUp/signUp';
import { Chat } from './views/chat/chat';
import { Profile } from './views/profile/profile';
import { ProfileUpdateInfo } from './views/profile/profile-update-info/profile-update-info';
import { ProfileUpdatePassword } from './views/profile/profile-update-password/profile-update-password';
window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;
  const page404 = new Page404({
    errorMessageCode: '404',
    errorMessageText: 'Не туда попали',
    href: '/',
    message: 'Назад',
  });
  root.append(page404.getContent()!);
  page404.dispatchComponentDidMount();
  const page500 = new Page500({
    errorMessageCode: '500',
    errorMessageText: 'Мы уже фиксим',
    href: '/',
    message: 'Назад',
  });
  root.append(page500.getContent()!);
  page500.dispatchComponentDidMount();
  const signIn = new SignIn({ title: 'Войти' });

  root.append(signIn.getContent()!);

  signIn.dispatchComponentDidMount();

  const signUp = new SignUp({ title: 'Регистрация' });

  root.append(signUp.getContent()!);

  signUp.dispatchComponentDidMount();

  const chat = new Chat({ title: 'Регистрация' });

  root.append(chat.getContent()!);

  chat.dispatchComponentDidMount();

  const profile = new Profile();

  root.append(profile.getContent()!);

  profile.dispatchComponentDidMount();

  const profileInfo = new ProfileUpdateInfo();

  root.append(profileInfo.getContent()!);

  profileInfo.dispatchComponentDidMount();

  const profilePassword = new ProfileUpdatePassword();

  root.append(profilePassword.getContent()!);

  profilePassword.dispatchComponentDidMount();
});
