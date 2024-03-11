import { Injectable } from "@angular/core"
import { FormArray, FormGroup } from "@angular/forms"

@Injectable({ providedIn: "root" })

export class ValidatorsService {
    public noBlankSpaceEnd = /\S$/

    public isValidInput(form: FormGroup, input: string): boolean | null {
        return form.controls[input].errors && form.controls[input].touched
    }

    public isValidArrayInput(formArray: FormArray, index: number) {
        return formArray.controls[index].errors && formArray.controls[index].touched
    }
}


