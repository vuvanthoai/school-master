export enum RegistrationFormProperties {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  PASSWORD = 'password',
  RE_PASSWORD = 'rePassword',
  POST_CODE = 'postCode',
  PHONE_NUMBER = 'phoneNumber',
}

export interface RegistrationFormValue {
  [RegistrationFormProperties.FIRST_NAME]: string;
  [RegistrationFormProperties.LAST_NAME]: string;
  [RegistrationFormProperties.EMAIL]: string;
  [RegistrationFormProperties.PASSWORD]: string;
  [RegistrationFormProperties.RE_PASSWORD]: string;
  [RegistrationFormProperties.POST_CODE]?: string;
  [RegistrationFormProperties.PHONE_NUMBER]?: string;
}
