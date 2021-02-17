import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {User} from '../../models/user';
import {Action, createReducer, on} from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface UserState {
    users: EntityState<User>;
}
export const userAdapter = createEntityAdapter<User>();
export const userSelectors = userAdapter.getSelectors();

export const initialState: UserState = {
    users: userAdapter.getInitialState(),
};

const reducer = createReducer(
  initialState,
  on(UserActions.registerUserSuccessAction,
    (state, { registerUserResponse } ) => ({
      ...state,
      users: userAdapter.upsertOne(
        registerUserResponse.user,
        state.users
      )
    }))
);

export function userReducer(state: undefined, action: Action) {
  return reducer(state, action);
}
