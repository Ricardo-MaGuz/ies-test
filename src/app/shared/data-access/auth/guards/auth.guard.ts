import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) { }
  canLoad(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      tap(state => {
        if (!state) {
          this.router.navigate(['/login'])
        }
      }), take(1)
    );
  }

}
