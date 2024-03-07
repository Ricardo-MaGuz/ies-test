import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesoutingModule } from './pages-routing.module';
import { NavModule } from 'src/app/shared/ui/nav/nav.module';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { FormComponent } from './form/form.component';
import { DateCalculatorComponent } from './date-calculator/date-calculator.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ConversionsComponent,
    FormComponent,
    DateCalculatorComponent

  ],
  imports: [
    CommonModule,
    PagesoutingModule,
    NavModule,
    MatButtonModule
  ],
})
export class PagesModule { }
