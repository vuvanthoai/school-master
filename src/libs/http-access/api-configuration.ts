/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
<<<<<<< HEAD
  rootUrl: string = 'http://api.schoolmaster.io';
=======
  rootUrl: string = '';
>>>>>>> f22ba5f (update service)
}

/**
 * Parameters for `ApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
