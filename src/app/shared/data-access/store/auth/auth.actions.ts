import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/shared/models/user.model';


export const unsetUser = createAction(
    '[Auth] unsetUser'
);

export const setUser = createAction(
    '[Auth] setUser',
    props<{ user: IUser }>()
);

