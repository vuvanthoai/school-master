/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface SignUpConfirm$Params {
<<<<<<< HEAD
  body?: {
    token?: string;
    uid?: string;
  };
=======
  userId: any;
>>>>>>> f22ba5f (update service)
}

export function signUpConfirm(
  http: HttpClient,
  rootUrl: string,
<<<<<<< HEAD
  params?: SignUpConfirm$Params,
=======
  params: SignUpConfirm$Params,
>>>>>>> f22ba5f (update service)
  context?: HttpContext
): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, signUpConfirm.PATH, 'post');
  if (params) {
<<<<<<< HEAD
    rb.body(params.body, 'application/json');
=======
    rb.path('userId', params.userId, {});
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

<<<<<<< HEAD
signUpConfirm.PATH = '/hr/signup/confirm/';
=======
signUpConfirm.PATH = '/hr/signup/{userId}/confirm/';
>>>>>>> f22ba5f (update service)
