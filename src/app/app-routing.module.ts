import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/data-access/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/feature/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'pages',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./pages/feature/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
