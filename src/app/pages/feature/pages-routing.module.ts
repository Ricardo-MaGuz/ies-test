import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { FormComponent } from './form/form.component';
import { DateCalculatorComponent } from './date-calculator/date-calculator.component';

const routes: Routes = [
    {
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
    },
    {
        path: '',
        component: HomeComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesoutingModule { }