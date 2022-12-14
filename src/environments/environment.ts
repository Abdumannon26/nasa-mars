// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { ENDPOINTS } from '@core/endpoints';

const DOMAIN = 'https://api.nasa.gov/mars-photos/';

export const environment = {
  production: false,
  domain: DOMAIN,
  apiUrl: DOMAIN + 'api/v1',
  api: ENDPOINTS,
  apiKey: 'b1Rw82UjVHWd7lBEud9EkwV9z6iTmWstQZpN9X0r'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
