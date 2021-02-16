import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterUserCommand} from '../models/commands/register-user-command';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {RegisterUserCommandResponse} from '../models/responses/register-user-command-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<RegisterUserCommandResponse> {
    const registerUserCommand = {
      user
    } as RegisterUserCommand;
    return this.http.post('/register', registerUserCommand);
  }
}
