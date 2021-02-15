import {Address} from './address';
import {Email} from './email';

export class Contact {
  constructor(userId: string, address: Address, email: Email) {
    this.userId = userId;
    this.address = address;
    this.email = email;
  }
  userId: string;
  address: Address;
  email: Email;
}
