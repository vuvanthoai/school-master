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
} from '../fn/auth-controller/change-password';
import {
  forgotPassword,
  ForgotPassword$Params,
} from '../fn/auth-controller/forgot-password';
import {
  forgotPasswordConfirm,
  ForgotPasswordConfirm$Params,
} from '../fn/auth-controller/forgot-password-confirm';
import { login, Login$Params } from '../fn/auth-controller/login';
import { LoginResponse } from '../models/login-response';
import { logout, Logout$Params } from '../fn/auth-controller/logout';

@Injectable({ providedIn: 'root' })
export class AuthControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `logout()` */
  static readonly LogoutPath = '/auth/logout';

  /**
   * Logout.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logout()` instead.
   *
   * This method doesn't expect any request body.
   */
  logout$Response(
    params?: Logout$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    return logout(this.http, this.rootUrl, params, context);
  }

  /**
   * Logout.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logout(params?: Logout$Params, context?: HttpContext): Observable<void> {
    return this.logout$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `login()` */
  static readonly LoginPath = '/auth/login';

  /**
   * Login.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(
    params: Login$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<LoginResponse>> {
    return login(this.http, this.rootUrl, params, context);
  }

  /**
   * Login.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(
    params: Login$Params,
    context?: HttpContext
  ): Observable<LoginResponse> {
    return this.login$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoginResponse>): LoginResponse => r.body)
    );
  }

  /** Path part for operation `forgotPassword()` */
  static readonly ForgotPasswordPath = '/auth/forgot-password';

  /**
   * Forgot password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `forgotPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  forgotPassword$Response(
    params: ForgotPassword$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    return forgotPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * Forgot password.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `forgotPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  forgotPassword(
    params: ForgotPassword$Params,
    context?: HttpContext
  ): Observable<void> {
    return this.forgotPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `forgotPasswordConfirm()` */
  static readonly ForgotPasswordConfirmPath =
    '/auth/forgot-password-confirmation';

  /**
   * Forgot password confirmation.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `forgotPasswordConfirm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  forgotPasswordConfirm$Response(
    params: ForgotPasswordConfirm$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    return forgotPasswordConfirm(this.http, this.rootUrl, params, context);
  }

  /**
   * Forgot password confirmation.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `forgotPasswordConfirm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  forgotPasswordConfirm(
    params: ForgotPasswordConfirm$Params,
    context?: HttpContext
  ): Observable<void> {
    return this.forgotPasswordConfirm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `changePassword()` */
  static readonly ChangePasswordPath = '/auth/change-password';

  /**
   * Change password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword$Response(
    params: ChangePassword$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    return changePassword(this.http, this.rootUrl, params, context);
  }

  /**
   * Change password.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword(
    params: ChangePassword$Params,
    context?: HttpContext
  ): Observable<void> {
    return this.changePassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }
}
