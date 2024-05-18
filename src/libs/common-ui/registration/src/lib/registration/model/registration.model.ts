export enum RegistrationFormProperties {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'CONFIRM_PASSWORD',
  POST_CODE = 'postCode',
  PHONE_NUMBER = 'phoneNumber',
}

export interface RegistrationFormValue {
  [RegistrationFormProperties.FIRST_NAME]: string;
  [RegistrationFormProperties.LAST_NAME]: string;
  [RegistrationFormProperties.EMAIL]: string;
  [RegistrationFormProperties.PASSWORD]: string;
  [RegistrationFormProperties.CONFIRM_PASSWORD]: string;
  [RegistrationFormProperties.POST_CODE]: string;
  [RegistrationFormProperties.PHONE_NUMBER]: string;
}

export enum StatusLoading {
  DEFAULT,
  SUBMITTING,
  SUCCESS,
}
