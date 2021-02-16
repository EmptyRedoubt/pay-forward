import {User} from '../user';

export class RegisterUserCommand {
 constructor(user: User) {
   this.user = user;
 }
 user: User;
}
