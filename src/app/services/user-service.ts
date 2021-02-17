import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterUserCommand} from '../models/commands/register-user-command';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    const registerUserCommand = {
      user
    } as RegisterUserCommand;
    return this.http.post('api/user/register', registerUserCommand);
  }

}
