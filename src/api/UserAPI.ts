import BaseAPI from './BaseAPI';
export interface PasswordData {
  oldPassword: string;
  newPassword: string;
}

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}
export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  update(data: SigninData) {
    return this.http.put('/profile', data);
  }

  password(data: PasswordData) {
    return this.http.put('/password', data);
  }

  avatar(data: any) {
    return this.http.put('/profile/avatar', data);
  }

  getUser(id: number): Promise<Array<User & { role: string }>> {
    return this.http.get(`/${id}`);
  }

}

export default new UserAPI();
