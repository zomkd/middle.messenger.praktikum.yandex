import API, { AuthAPI, SigninData, SignupData } from '../api/AuthAPI';
import store from '../store/store';
import router from '../router/router';

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: SigninData) {
    try {
      store.set('user.error', null);
      await this.api.signin(data);
      await this.fetchUser();
      router.go('/messanger');
    } catch (e: any) {
      store.set('user.error', e);
    }
  }

  async signup(data: SignupData) {
    try {
      store.set('user.error', null);
      await this.api.signup(data);

      await this.fetchUser();

      router.go('/messanger');
    } catch (e: any) {
      store.set('user.error', e);
    }
  }

  async fetchUser() {
    try {
      const user = await this.api.read();
      if (!user.reason)
        store.set('user.data', user);
    } catch (e: any) {
      store.set('user.error', e);
    }
  }

  async logout() {
    try {
      await this.api.logout();

      router.go('/');
    } catch (e: any) {
      store.set('user.error', e);
    }
  }
}

export default new AuthController();
