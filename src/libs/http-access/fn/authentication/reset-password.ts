/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface ResetPassword$Params {
  body?: {
    email?: string;
  };
}

export function resetPassword(
  http: HttpClient,
  rootUrl: string,
  params?: ResetPassword$Params,
  context?: HttpContext
<<<<<<< HEAD
): Observable<StrictHttpResponse<any>> {
  const rb = new RequestBuilder(rootUrl, resetPassword.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http
    .request(rb.build({ responseType: 'text', accept: 'text/plain', context }))
    .pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
=======
): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, resetPassword.PATH, 'post');
  if (params) {
    rb.body('body', params.body, {});
  }

  return http
    .request(rb.build({ responseType: 'text', accept: '*/*', context }))
    .pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({
          body: undefined,
        }) as StrictHttpResponse<void>;
>>>>>>> f22ba5f (update service)
      })
    );
}

resetPassword.PATH = '/hr/password-reset/';
