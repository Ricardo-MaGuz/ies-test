import { Component } from '@angular/core';

@Component({
  selector: 'app-date-calculator',
  templateUrl: './date-calculator.component.html',
  styleUrls: ['./date-calculator.component.scss']
})
export class DateCalculatorComponent {

  constructor() { }
  canSend = false
  selectedDate!: Date;
  selectedUnit!: number;
  amount!: number;
  resultDate!: Date;

  calculateDate(): void {
    if (this.selectedDate && this.selectedUnit && this.amount) {
      this.resultDate = this.addTimeToDate(this.selectedDate, this.selectedUnit, this.amount);

    }
  }

  addTimeToDate(date: Date, unit: number, amount: number): Date {
    const newDate = new Date(date);

    newDate.setDate(newDate.getDate() + amount * unit);
    console.log(newDate)

    return newDate;
  }
}