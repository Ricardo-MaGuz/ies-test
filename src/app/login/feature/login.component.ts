import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/utils/validators/validators.service.';
import { AuthService } from 'src/app/shared/data-access/auth/services/auth.service';
import { AppState } from 'src/app/app.reducer';
import * as ui from 'src/app/shared/data-access/store/ui/ui.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isAuth = false
  loading = false
  uiSubscription!: Subscription;
  loginForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });
  authSubscription!: Subscription;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private _snackBar: MatSnackBar,
    private authService: AuthService,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.authSubscription = this.store.select('user').subscribe(
      ({ user }) => {
        this.isAuth = user !== null;
      }
    )

    this.uiSubscription = this.store.select('ui').subscribe(
      ui => {
        this.loading = ui.isLoading
      }
    )

  }

  login() {
    if (this.loginForm.invalid) return
    this.store.dispatch(ui.isLoading())
    const { email, password } = this.loginForm.value
    this.authService.login(email, password).then(() => [
      this.store.dispatch(ui.stopLoading()),
      this.router.navigate(['/', 'pages'])
    ]

    )
      .catch((err: any) => {
        this.store.dispatch(ui.stopLoading()),
          this._snackBar.open(err, 'Cerrar', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: 'warn'
          })
      })
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login'])
    })
  }

  isValidInput(input: string): boolean | null {
    return this.validatorsService.isValidInput(this.loginForm, input)
  }

  ngOnDestroy() {
    this.uiSubscription.unsubscribe();
  }
}