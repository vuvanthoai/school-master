/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import {
  changePassword,
  ChangePassword$Params,
} from '../fn/authentication/change-password';
import { login, Login$Params } from '../fn/authentication/login';
import {
  loginRefresh,
  LoginRefresh$Params,
} from '../fn/authentication/login-refresh';
import { logout, Logout$Params } from '../fn/authentication/logout';
import {
  resetPassword,
  ResetPassword$Params,
} from '../fn/authentication/reset-password';
import {
  resetPasswordConfirm,
  ResetPasswordConfirm$Params,
} from '../fn/authentication/reset-password-confirm';
import { signup, Signup$Params } from '../fn/authentication/signup';
import {
  signUpConfirm,
  SignUpConfirm$Params,
} from '../fn/authentication/sign-up-confirm';

/**
 * This folder contains api endpoints for authentication purpose, such as login, logout, register...
 *
 * The content in each endpoint is still in development and can be changed any time.
 *
 * > NOTE: the sample data in all urls are using Postman random values (ref: https://learning.postman.com/docs/writing-scripts/script-references/variables-list/) !!!
 */
@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `login()` */
  static readonly LoginPath = '/hr/login/';

  /**
   * Login.
   *
   * Login endpoint, used to log the user in.
   *
   * This endpoint's response is currently only a sample, and may vary depending on the authentication method used.
   * But it should return a token.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(
    params?: Login$Params,
    context?: HttpContext
  ): Observable<
    StrictHttpResponse<{
      access_token?: string;
      refresh_token?: string;
    }>
  > {
    return login(this.http, this.rootUrl, params, context);
  }

  /**
   * Login.
   *
   * Login endpoint, used to log the user in.
   *
   * This endpoint's response is currently only a sample, and may vary depending on the authentication method used.
   * But it should return a token.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(
    params?: Login$Params,
    context?: HttpContext
  ): Observable<{
    access_token?: string;
    refresh_token?: string;
  }> {
    return this.login$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<{
            access_token?: string;
            refresh_token?: string;
          }>
        ): {
          access_token?: string;
          refresh_token?: string;
        } => r.body
      )
    );
  }

  /** Path part for operation `loginRefresh()` */
  static readonly LoginRefreshPath = '/hr/login/refresh/';

  /**
   * Login Refresh.
   *
   * Login Refresh
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginRefresh()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginRefresh$Response(
    params?: LoginRefresh$Params,
    context?: HttpContext
  ): Observable<
    StrictHttpResponse<{
      access?: string;
    }>
  > {
    return loginRefresh(this.http, this.rootUrl, params, context);
  }

  /**
   * Login Refresh.
   *
   * Login Refresh
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loginRefresh$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginRefresh(
    params?: LoginRefresh$Params,
    context?: HttpContext
  ): Observable<{
    access?: string;
  }> {
    return this.loginRefresh$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<{
            access?: string;
          }>
        ): {
          access?: string;
        } => r.body
      )
    );
  }

  /** Path part for operation `logout()` */
  static readonly LogoutPath = '/hr/logout/';

  /**
   * Logout.
   *
   * Logout
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logout()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logout$Response(
    params?: Logout$Params,
    context?: HttpContext
  ): Observable<
    StrictHttpResponse<{
      detail?: string;
    }>
  > {
    return logout(this.http, this.rootUrl, params, context);
  }

  /**
   * Logout.
   *
   * Logout
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logout$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logout(
    params?: Logout$Params,
    context?: HttpContext
  ): Observable<{
    detail?: string;
  }> {
    return this.logout$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<{
            detail?: string;
          }>
        ): {
          detail?: string;
        } => r.body
      )
    );
  }

  /** Path part for operation `signup()` */
  static readonly SignupPath = '/hr/signup/';

  /**
   * Signup.
   *
   * Signup
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signup$Response(
    params?: Signup$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    return signup(this.http, this.rootUrl, params, context);
  }

  /**
   * Signup.
   *
   * Signup
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signup(params?: Signup$Params, context?: HttpContext): Observable<any> {
    return this.signup$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `changePassword()` */
  static readonly ChangePasswordPath = '/hr/password-change/';

  /**
   * Change Password.
   *
   * Change Password
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword$Response(
    params?: ChangePassword$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    return changePassword(this.http, this.rootUrl, params, context);
  }

  /**
   * Change Password.
   *
   * Change Password
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword(
    params?: ChangePassword$Params,
    context?: HttpContext
  ): Observable<void> {
    return this.changePassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `resetPassword()` */
  static readonly ResetPasswordPath = '/hr/password-reset/';

  /**
   * Reset Password.
   *
   * Reset Password
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPassword$Response(
    params?: ResetPassword$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    return resetPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * Reset Password.
   *
   * Reset Password
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPassword(
    params?: ResetPassword$Params,
    context?: HttpContext
  ): Observable<any> {
    return this.resetPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `resetPasswordConfirm()` */
  static readonly ResetPasswordConfirmPath = '/hr/password-reset/confirm/';

  /**
   * Reset Password Confirm.
   *
   * Reset Password Confirm
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPasswordConfirm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPasswordConfirm$Response(
    params?: ResetPasswordConfirm$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    return resetPasswordConfirm(this.http, this.rootUrl, params, context);
  }

  /**
   * Reset Password Confirm.
   *
   * Reset Password Confirm
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetPasswordConfirm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPasswordConfirm(
    params?: ResetPasswordConfirm$Params,
    context?: HttpContext
  ): Observable<void> {
    return this.resetPasswordConfirm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `signUpConfirm()` */
  static readonly SignUpConfirmPath = '/hr/signup/confirm/';

  /**
   * Sign Up Confirm.
   *
   * Sign Up Confirm
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signUpConfirm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpConfirm$Response(
    params?: SignUpConfirm$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    return signUpConfirm(this.http, this.rootUrl, params, context);
  }

  /**
   * Sign Up Confirm.
   *
   * Sign Up Confirm
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `signUpConfirm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signUpConfirm(
    params?: SignUpConfirm$Params,
    context?: HttpContext
  ): Observable<void> {
    return this.signUpConfirm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }
}
