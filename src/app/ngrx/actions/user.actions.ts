import {createAction, props} from '@ngrx/store';
import {User} from '../../models/user';
import {RegisterUserCommandResponse} from '../../models/responses/register-user-command-response';

export const registerUserAction = createAction(
  'user/register',
  props<{ user: User }>()
);

export const registerUserAcceptedAction = createAction('user/register/accepted');

export const registerUserFailureAction = createAction(
  'user/register/failure',
  props<{ error: any }>(),
);

export const registerUserSuccessAction = createAction(
  'user/register/success',
  props<{
    registerUserCommandResponse: RegisterUserCommandResponse
  }>(),
);
