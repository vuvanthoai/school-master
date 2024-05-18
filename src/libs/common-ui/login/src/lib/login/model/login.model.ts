export enum LoginFormProperties {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export interface LoginFormValue {
  [LoginFormProperties.EMAIL]: string;
  [LoginFormProperties.PASSWORD]: string;
}

export enum StatusLoading {
  DEFAULT,
  SUBMITTING,
  SUCCESS,
}
