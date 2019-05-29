import {Injectable} from "@angular/core";
import {AbstractControl, ValidationErrors, Validator} from "@angular/forms";
import {Moment} from "moment";
import * as moment from 'moment';

@Injectable({providedIn: "root"})

export class CorrectAgeValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const birthdate = control.value as Moment;
    const age = moment().diff(birthdate, 'years');
    return age < 18 ? {ageOutOfRange: true} : null;
  }
}
