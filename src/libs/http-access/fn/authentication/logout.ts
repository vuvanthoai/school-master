/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

<<<<<<< HEAD
export interface Logout$Params {
  body?: {
    refresh?: string;
  };
}
=======
export interface Logout$Params {}
>>>>>>> f22ba5f (update service)

export function logout(
  http: HttpClient,
  rootUrl: string,
  params?: Logout$Params,
  context?: HttpContext
<<<<<<< HEAD
): Observable<
  StrictHttpResponse<{
    detail?: string;
  }>
> {
  const rb = new RequestBuilder(rootUrl, logout.PATH, 'post');
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
          detail?: string;
        }>;
=======
): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, logout.PATH, 'post');
  if (params) {
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

logout.PATH = '/hr/logout/';
