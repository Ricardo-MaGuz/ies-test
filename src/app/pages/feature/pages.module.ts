import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesoutingModule } from './pages-routing.module';
import { NavModule } from 'src/app/shared/ui/nav/nav.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { FormComponent } from './form/form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NameDialogModule } from 'src/app/shared/ui/name-dialog/name-dialog.module';
import { LayoutComponent } from '../shared/ui/layout/layout.component';
import { MatCardModule } from '@angular/material/card';
import { DateCalculatorComponent } from './date-calculator/date-calculator.component';
import { CambioLetrasPipeModule } from 'src/app/shared/utils/pipes/cambio-letras/cambio-letras.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ConversionsComponent,
    DateCalculatorComponent,
    FormComponent,
    LayoutComponent

  ],
  imports: [
    CommonModule,
    PagesoutingModule,
    NavModule,
    NameDialogModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSnackBarModule,
    CambioLetrasPipeModule,
    ReactiveFormsModule
  ],
})
export class PagesModule { }
