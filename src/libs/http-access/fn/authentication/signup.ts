/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface Signup$Params {
  body?: {
    email: string;
    first_name: string;
    last_name: string;
    password1: string;
    password2: string;
    phone_number: string;
    post_code: string;
  };
}

export function signup(
  http: HttpClient,
  rootUrl: string,
  params?: Signup$Params,
  context?: HttpContext
): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, signup.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

signup.PATH = '/hr/signup/';
