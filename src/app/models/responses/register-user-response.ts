import {User} from '../user';

export class RegisterUserResponse {
  constructor(user: User) {
    this.user = user;
  }
  user: User;
}
