import { FormGroup, ValidationErrors } from '@angular/forms';

export class ConfirmedValidator {
  static confirmedValidator = (
    controlName: string,
    matchingControlName: string,
    matchingValidator = false
  ): ValidationErrors | null => {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (!control.value || !matchingControl.value) return;
      if (!matchingValidator && control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else if (matchingValidator && control.value === matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  };
}

export const clearNotAbleData = (data: object): object => {
  return JSON.parse(JSON.stringify(data));
};
