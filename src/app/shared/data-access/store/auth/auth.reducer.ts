import { createReducer, on } from '@ngrx/store';
import { setUser, unsetUser } from './auth.actions';
import { IUser } from 'src/app/shared/models/user.model';

export interface State {
    user: IUser | null;
}

export const initialState: State = {
    user: null,
}


const _authReducer = createReducer(initialState,

    on(setUser, (state, { user }) => ({ ...state, user: { ...user } })),
    on(unsetUser, state => ({ ...state, user: null })),

);

export function authReducer(state: any, action: any) {
    return _authReducer(state, action);
}