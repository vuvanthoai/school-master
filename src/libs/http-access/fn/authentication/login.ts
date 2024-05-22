/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface Login$Params {
  body?: {
    password?: string;
    username?: string;
  };
}

export function login(
  http: HttpClient,
  rootUrl: string,
  params?: Login$Params,
  context?: HttpContext
<<<<<<< HEAD
): Observable<
  StrictHttpResponse<{
    access_token?: string;
    refresh_token?: string;
  }>
> {
  const rb = new RequestBuilder(rootUrl, login.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http
    .request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    )
    .pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
          access_token?: string;
          refresh_token?: string;
        }>;
=======
): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, login.PATH, 'post');
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

login.PATH = '/hr/login/';
