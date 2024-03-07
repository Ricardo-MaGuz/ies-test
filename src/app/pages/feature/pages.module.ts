import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesoutingModule } from './pages-routing.module';
import { NavModule } from 'src/app/shared/ui/nav/nav.module';



@NgModule({
  declarations: [
    PagesComponent

  ],
  imports: [
    CommonModule,
    PagesoutingModule,
    NavModule
  ]
})
export class PagesModule { }
