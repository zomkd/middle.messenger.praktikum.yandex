import API, { UserAPI, SigninData, PasswordData } from '../api/UserAPI';
import store from '../store/store';
import AuthController from './AuthController';
import router from '../router/router';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async profile(data: SigninData) {
    try {
      await AuthController.fetchUser();
      store.set('user.error', null);
      await this.api.update(data);
      router.go('/profile');
    } catch (e: any) {
      store.set('user.error', e);
    }
  }

  async password(data: PasswordData) {
    try {
      store.set('user.error', null);
      await this.api.password(data);
      await AuthController.fetchUser();
      router.go('/profile');
    } catch (e: any) {
      store.set('user.error', e);
    }
  }

  async avatar(data: FormData) {
    try {
      await this.api.avatar(data);
      await AuthController.fetchUser();
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new UserController();
