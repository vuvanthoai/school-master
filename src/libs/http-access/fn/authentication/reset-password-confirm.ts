/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface ResetPasswordConfirm$Params {
  body?: {
<<<<<<< HEAD
    new_password1?: string;
    new_password2?: string;
    token?: string;
    uid?: string;
=======
    password?: string;
    token?: string;
>>>>>>> f22ba5f (update service)
  };
}

export function resetPasswordConfirm(
  http: HttpClient,
  rootUrl: string,
  params?: ResetPasswordConfirm$Params,
  context?: HttpContext
): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, resetPasswordConfirm.PATH, 'post');
  if (params) {
<<<<<<< HEAD
    rb.body(params.body, 'application/json');
=======
    rb.body('body', params.body, {});
>>>>>>> f22ba5f (update service)
  }

  return http
    .request(rb.build({ responseType: 'text', accept: '*/*', context }))
    .pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({
          body: undefined,
        }) as StrictHttpResponse<void>;
      })
    );
}

resetPasswordConfirm.PATH = '/hr/password-reset/confirm/';
