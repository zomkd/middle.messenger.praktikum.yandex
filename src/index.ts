import { Page404 } from './views/404/404';
import { Page500 } from './views/500/500';
import { SignIn } from './views/auth/signIn/signIn';
import { SignUp } from './views/auth/signUp/signUp';
import { Chat } from './views/chat/chat';
import { Profile } from './views/profile/profile';
import { ProfilePage } from './components/profile-card/profile-card-mixin';
import { ProfileUpdateInfo } from './views/profile/profile-update-info/profile-update-info';
import { ProfileUpdatePassword } from './views/profile/profile-update-password/profile-update-password';
import './controllers/MessagesController';
import AuthController from './controllers/AuthController';
import Router from './router/router';
enum Routes {
  Index = '/',
  SignUp = '/signup',
  Chat = '/messanger',
  Profile = '/profile',
  Settings = '/settings',
  ChangePassword = '/change-password',
  Page404 = '/404',
  Page500 = '/500',
}
window.addEventListener('DOMContentLoaded', async () => {
  Router.use(Routes.Index, SignIn)
    .use(Routes.SignUp, SignUp)
    .use(Routes.Chat, Chat)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Settings, ProfileUpdateInfo)
    .use(Routes.ChangePassword, ProfileUpdatePassword)
    .use(Routes.Page404, Page404)
    .use(Routes.Page500, Page500);
  debugger;
  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
      break;
    case Routes.SignUp:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Chat);
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
});
