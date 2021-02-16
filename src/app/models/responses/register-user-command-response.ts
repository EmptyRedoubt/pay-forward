import {User} from '../user';

export class RegisterUserCommandResponse {
  constructor(user: User) {
    this.user = user;
  }
  user: User;
}
