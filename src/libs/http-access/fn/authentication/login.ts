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
      })
    );
}

login.PATH = '/hr/login/';
