import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterUserCommand} from '../models/commands/register-user-command';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {RegisterUserResponse} from '../models/responses/register-user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<RegisterUserResponse> {
    const registerUserCommand = {
      user
    } as RegisterUserCommand;
    return this.http.post('/register', registerUserCommand);
  }
}
