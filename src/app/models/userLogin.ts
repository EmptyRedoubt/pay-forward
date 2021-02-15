export class UserLogin {
  constructor(userId: string, username: string, password: string) {
    this.userId = userId;
    this.username = username;
    this.password = password;
  }
  userId: string;
  username: string;
  password: string;
}
