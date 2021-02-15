import {createAction, props} from '@ngrx/store';
import {User} from '../../models/user';

export const registerUser = createAction('user/register',
  props<{ user: User }>());
