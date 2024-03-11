import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../data-access/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  navbarOpen = false;
  constructor(private authService: AuthService, private router: Router,) { }


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login'])
    })
  }
}
