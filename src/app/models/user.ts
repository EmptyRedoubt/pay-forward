import {Contact} from './contact';
import {UserLogin} from './userLogin';

export class User {
  constructor(userId: string, firstName: string, lastName: string, contact: Contact, userLogin: UserLogin, userType: string) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.contact = contact;
    this.userLogin = userLogin;
    this.userType = userType;
  }
  userId: string;
  firstName: string;
  lastName: string;
  contact: Contact;
  userLogin: UserLogin;
  userType: string;
}
