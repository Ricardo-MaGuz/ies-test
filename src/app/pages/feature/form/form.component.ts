import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MaritalStatus } from '../../models/interfaces';
import { noBlankSpaceEnd } from '../../utils/validations';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  isReader = false;
  submitted = false;
  name = ''
  maritalStatuses: MaritalStatus[] = [
    { value: '12', label: 'Soltero' },
    { value: '13', label: 'Casado' },
    { value: '14', label: 'Divorciado' },
  ];
  bookForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    maritalStatus: new FormControl(12),
    isSmoker: new FormControl(false),
    isReader: new FormControl(false),
    books: new FormArray([]),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.pattern(noBlankSpaceEnd)]],
        lastName: ['', [Validators.required, Validators.pattern(noBlankSpaceEnd)]],
        isSmoker: [null, Validators.required],
        isReader: [null, Validators.required],
        books: this.fb.array([]),
      }
    );
  }

  get fc(): { [key: string]: AbstractControl } {
    return this.bookForm.controls;
  }

  get books() {
    return this.bookForm.get('books') as FormArray
  }

  isValidInput(input: string): boolean | null {
    const fc = this.bookForm.controls
    return fc[input].errors && fc[input].touched
  }

  isValidArrayInput(formArray: FormArray, index: number) {
    return formArray.controls[index].errors && formArray.controls[index].touched
  }

  getInputError(input: string): string | null {
    const fc = this.bookForm.controls
    if (!fc[input]) return null;
    const errors = fc[input].errors || {};
    const errorMessages: { [key: string]: string } = {
      "required": "Este campo es requerido",
      "pattern": "Borra los espacios finales"
    };
    for (const key of Object.keys(errors)) {
      if (errorMessages[key]) {
        return errorMessages[key];
      }
    }
    return null;
  }

  onDeleteBook(index: number) {
    return this.books.removeAt(index)

  }

  onAddBook() {
    this.books.push(this.fb.control('', Validators.required))
  }

  purgeBooks() {
    this.books.clear()
  }

  onSubmit(): void {


    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched()
      console.log(JSON.stringify(this.bookForm.errors));
      return;
    }
    this.submitted = true;
    this.name = this.bookForm.controls['name'].value
    console.log(JSON.stringify(this.bookForm.value));
    this.bookForm.reset()

  }

}