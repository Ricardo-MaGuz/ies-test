import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MatNativeDateModule } from '@angular/material/core';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { appReducers } from './app.reducer';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    StoreModule.forRoot(appReducers),
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ], providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
