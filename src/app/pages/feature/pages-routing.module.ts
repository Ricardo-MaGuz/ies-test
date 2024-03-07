import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { FormComponent } from './form/form.component';
import { DateCalculatorComponent } from './date-calculator/date-calculator.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [{
            path: 'conversions',
            component: ConversionsComponent
        },
        {
            path: 'form',
            component: FormComponent
        },
        {
            path: 'date-calculator',
            component: DateCalculatorComponent
        }
            ,
        {
            path: 'home',
            component: HomeComponent
        },]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesoutingModule { }