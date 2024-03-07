import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/feature/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/feature/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
