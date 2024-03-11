import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngrx/store';
import { Subscription, map } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import * as authActions from '../../store/auth/auth.actions';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserClass } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userSubscription!: Subscription;
  private _user!: UserClass | null;

  get user() {
    return this._user;
  }
  constructor(
    public auth: AngularFireAuth,
    private store: Store<AppState>,
    private firestore: AngularFirestore,
  ) { }

  initAuthListener() {
    this.auth.authState.subscribe(fuser => {
      if (fuser) {
        this.userSubscription = this.firestore.doc(`${fuser.uid}/user`).valueChanges()
          .subscribe((firestoreUser: any) => {
            const user = UserClass.fromFirebase(firestoreUser);
            this._user = user;
            this.store.dispatch(authActions.setUser({ user }));
          })
      } else {
        this._user = null;
        this.userSubscription?.unsubscribe();
        this.store.dispatch(authActions.unsetUser());
      }
    });
  }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.signOut()
  }
  isAuthenticated() {
    return this.auth.authState.pipe(map(fUser => fUser != null))
  }

}
