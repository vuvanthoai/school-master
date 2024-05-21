/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { schoolDetail, SchoolDetail$Params } from '../fn/schools/school-detail';
import { schoolList, SchoolList$Params } from '../fn/schools/school-list';
import {
  schoolStatistics,
  SchoolStatistics$Params,
} from '../fn/schools/school-statistics';

@Injectable({ providedIn: 'root' })
export class SchoolsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `schoolList()` */
  static readonly SchoolListPath = '/schools/';

  /**
   * School List.
   *
   * School List
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `schoolList()` instead.
   *
   * This method doesn't expect any request body.
   */
  schoolList$Response(
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
    return schoolList(this.http, this.rootUrl, params, context);
  }

  /**
   * School List.
   *
   * School List
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `schoolList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  schoolList(
    params?: SchoolList$Params,
    context?: HttpContext
  ): Observable<{
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
  }> {
    return this.schoolList$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<{
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
        ): {
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
        } => r.body
      )
    );
  }

  /** Path part for operation `schoolDetail()` */
  static readonly SchoolDetailPath = '/schools/{id}/';

  /**
   * School Detail.
   *
   * School Detail
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `schoolDetail()` instead.
   *
   * This method doesn't expect any request body.
   */
  schoolDetail$Response(
    params: SchoolDetail$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    return schoolDetail(this.http, this.rootUrl, params, context);
  }

  /**
   * School Detail.
   *
   * School Detail
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `schoolDetail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  schoolDetail(
    params: SchoolDetail$Params,
    context?: HttpContext
  ): Observable<void> {
    return this.schoolDetail$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `schoolStatistics()` */
  static readonly SchoolStatisticsPath = '/schools/{id}/statistics/';

  /**
   * School Statistics.
   *
   * School Statistics
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `schoolStatistics()` instead.
   *
   * This method doesn't expect any request body.
   */
  schoolStatistics$Response(
    params: SchoolStatistics$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    return schoolStatistics(this.http, this.rootUrl, params, context);
  }

  /**
   * School Statistics.
   *
   * School Statistics
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `schoolStatistics$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  schoolStatistics(
    params: SchoolStatistics$Params,
    context?: HttpContext
  ): Observable<void> {
    return this.schoolStatistics$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }
}
