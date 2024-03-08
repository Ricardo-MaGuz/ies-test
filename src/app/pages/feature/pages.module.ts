import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesoutingModule } from './pages-routing.module';
import { NavModule } from 'src/app/shared/ui/nav/nav.module';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { FormComponent } from './form/form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NameDialogModule } from 'src/app/shared/ui/name-dialog/name-dialog.module';
import { LayoutComponent } from '../shared/ui/layout/layout.component';
import { MatCardModule } from '@angular/material/card';
import { DateCalculatorComponent } from './date-calculator/date-calculator.component';
import { CambioLetrasPipe } from 'src/app/shared/pipes/cambio-letras/cambio-letras.pipe';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ConversionsComponent,
    DateCalculatorComponent,
    FormComponent,
    LayoutComponent,
    CambioLetrasPipe

  ],
  imports: [
    CommonModule,
    PagesoutingModule,
    NavModule,
    NameDialogModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
  ],
})
export class PagesModule { }
