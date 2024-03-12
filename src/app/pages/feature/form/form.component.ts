import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidatorsService } from 'src/app/shared/utils/validators/validators.service.';
import { FormService } from '../../shared/data-access/services/form.service';
import { IMaritalStatus } from '../../shared/model/marital-status.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormService]
})


export class FormComponent implements OnInit {
  isReader = false;
  submitted = false;
  name = ''
  maritalStatuses: IMaritalStatus = { 0: "" }
  bookForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    maritalStatus: new FormControl(),
    isSmoker: new FormControl(false),
    isReader: new FormControl(false),
    books: new FormArray([]),
  });

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private validatorsService: ValidatorsService,
    private formService: FormService,
  ) { }

  ngOnInit() {
    this.formService.getMaritalStatuses().subscribe(
      (response) => {
        this.maritalStatuses = response;
      },
      (error) => {
        console.error('Error fetching status:', error);
      }
    );

    this.bookForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.pattern(this.validatorsService.noBlankSpaceEnd)]],
        lastName: ['', [Validators.required, Validators.pattern(this.validatorsService.noBlankSpaceEnd)]],
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

  isValidInput(input: string): boolean | null {
    return this.validatorsService.isValidInput(this.bookForm, input)
  }

  isValidArrayInput(formArray: FormArray, index: number) {
    return this.validatorsService.isValidArrayInput(formArray, index)
  }

  onSubmit(): void {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched()
      this._snackBar.open('Hubo un error al enviar el formulario', 'Cerrar', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: 'warn'
      });
      return;
    }

    this.submitted = true;
    this.name = this.bookForm.controls['name'].value
    console.log(JSON.stringify(this.bookForm.value));
    this.bookForm.reset()
    this._snackBar.open(`Gracias ${this.name}, el formulario fue enviado.`, 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top', panelClass: 'success'
    });

  }

}