import { ActionReducerMap } from '@ngrx/store';
import * as ui from './shared/data-access/store/ui/ui.reducer';
import * as auth from './shared/data-access/store/auth/auth.reducer';


export interface AppState {
    ui: ui.State,
    user: auth.State
}

``

export const appReducers: ActionReducerMap<AppState> = {
    ui: ui.uiReducer,
    user: auth.authReducer
}