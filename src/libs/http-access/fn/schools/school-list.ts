/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface SchoolList$Params {
  name?: string;
  postcode?: string;
  location?: string;
  gender?: string;
  age_range_from?: string;
  age_range_to?: string;
  boarding_day?: string;
  admission_difficulty_rating?: string;
  academic_result?: string;
  distance_from?: string;
  distance_to?: string;
}

export function schoolList(
  http: HttpClient,
  rootUrl: string,
  params?: SchoolList$Params,
  context?: HttpContext
): Observable<
  StrictHttpResponse<{
    schools?: Array<{
      address3?: string;
      county?: string;
      created_at?: string;
      entry_stages?: Array<{
        academic_assessment?: string;
        acceptance_deadline?: string;
        admission_link?: string;
        assessment_in_person?: boolean;
        birth_certificate_required?: boolean;
        consortium?: boolean;
        created_at?: string;
        deposit_amount?: number;
        detail_link?: string;
        id?: number;
        iseb?: boolean;
        name?: string;
        note?: string;
        offers_made?: string;
        online_assessment?: boolean;
        open_date?: string;
        passpost_required?: boolean;
        registration_due_date?: string;
        registration_fee?: number;
        school?: string;
        school_id?: number;
        steps?: Array<{
          created_at?: string;
          due_date?: string;
          entry_stage?: number;
          id?: number;
          name?: string;
          order_number?: number;
          updated_at?: string;
        }>;
        updated_at?: string;
        year?: number;
      }>;
      general_admission_link?: string;
      id?: number;
      locality?: string;
      name?: string;
      postcode?: string;
      street_address?: string;
      town?: string;
      updated_at?: string;
      urn?: string;
      website?: string;
    }>;
  }>
> {
  const rb = new RequestBuilder(rootUrl, schoolList.PATH, 'get');
  if (params) {
    rb.query('name', params.name, {});
    rb.query('postcode', params.postcode, {});
    rb.query('location', params.location, {});
    rb.query('gender', params.gender, {});
    rb.query('age_range_from', params.age_range_from, {});
    rb.query('age_range_to', params.age_range_to, {});
    rb.query('boarding_day', params.boarding_day, {});
    rb.query(
      'admission_difficulty_rating',
      params.admission_difficulty_rating,
      {}
    );
    rb.query('academic_result', params.academic_result, {});
    rb.query('distance_from', params.distance_from, {});
    rb.query('distance_to', params.distance_to, {});
  }

  return http
    .request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    )
    .pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
          schools?: Array<{
            address3?: string;
            county?: string;
            created_at?: string;
            entry_stages?: Array<{
              academic_assessment?: string;
              acceptance_deadline?: string;
              admission_link?: string;
              assessment_in_person?: boolean;
              birth_certificate_required?: boolean;
              consortium?: boolean;
              created_at?: string;
              deposit_amount?: number;
              detail_link?: string;
              id?: number;
              iseb?: boolean;
              name?: string;
              note?: string;
              offers_made?: string;
              online_assessment?: boolean;
              open_date?: string;
              passpost_required?: boolean;
              registration_due_date?: string;
              registration_fee?: number;
              school?: string;
              school_id?: number;
              steps?: Array<{
                created_at?: string;
                due_date?: string;
                entry_stage?: number;
                id?: number;
                name?: string;
                order_number?: number;
                updated_at?: string;
              }>;
              updated_at?: string;
              year?: number;
            }>;
            general_admission_link?: string;
            id?: number;
            locality?: string;
            name?: string;
            postcode?: string;
            street_address?: string;
            town?: string;
            updated_at?: string;
            urn?: string;
            website?: string;
          }>;
        }>;
      })
    );
}

schoolList.PATH = '/schools/';
