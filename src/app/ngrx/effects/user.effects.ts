import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserService} from '../../services/user-service';
import {registerUserAcceptedAction, registerUserAction, registerUserFailureAction} from '../actions/user.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class UserEffects {

  registerUser$ = // createEffect(() =>
    this.actions$.pipe(
      ofType(registerUserAction),
      switchMap((action) =>
        this.userService.registerUser(action.user).pipe(
          map((response) => registerUserAcceptedAction()),
          catchError(
            (err) =>
              of(
                registerUserFailureAction({
                  error: err,
                }),
              ), // rejected
          ),
        ),
      ),
    );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
