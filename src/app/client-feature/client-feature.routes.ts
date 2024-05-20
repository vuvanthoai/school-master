import { Route } from '@angular/router';
import { NAVIGATION_URL_VALUES } from '@school-master/utilities/constants';
import { ClientFeatureComponent } from './client-feature.component';

function getClientFeatureChildRoutes(): Route[] {
  return [
    {
      path: '',
      pathMatch: 'full',
      loadComponent: () =>
        import('@school-master/home').then((m) => m.HomeComponent),
    },
    {
      path: `${NAVIGATION_URL_VALUES.SCHOOL}/:${NAVIGATION_URL_VALUES.USER_SLUG}/:${NAVIGATION_URL_VALUES.SCHOOL_SLUG}`,
      loadComponent: () =>
        import('@school-master/search-handler').then(
          (m) => m.SearchHandlerComponent
        ),
      pathMatch: 'full',
    },
    {
      path: `${NAVIGATION_URL_VALUES.LOGIN}`,
      loadComponent: () =>
        import('@school-master/common-ui/login').then((m) => m.LoginComponent),
    },
    {
      path: `${NAVIGATION_URL_VALUES.REGISTRATION}`,
      pathMatch: 'full',
      loadComponent: () =>
        import('@school-master/common-ui/registration').then(
          (m) => m.RegistrationComponent
        ),
      children: [],
    },
    {
      path: `${NAVIGATION_URL_VALUES.REGISTRATION}/${NAVIGATION_URL_VALUES.CONFIRM}`,
      loadComponent: () =>
        import('@school-master/common-ui/confirmation-active').then(
          (m) => m.ConfirmationActiveComponent
        ),
    },
    {
      path: `${NAVIGATION_URL_VALUES.RESET_PASSWORD}`,
      loadComponent: () =>
        import('@school-master/common-ui/reset-password').then(
          (m) => m.ResetPasswordComponent
        ),
    },
    {
      path: `${NAVIGATION_URL_VALUES.FORGOT_PASSWORD}`,
      loadComponent: () =>
        import('@school-master/common-ui/reset-password').then(
          (m) => m.ResetPasswordComponent
        ),
    },
    {
      path: `${NAVIGATION_URL_VALUES.CONTACT}`,
      loadComponent: () =>
        import('@school-master/contact').then((m) => m.ContactComponent),
    },
    {
      path: `${NAVIGATION_URL_VALUES.ABOUT_US}`,
      loadComponent: () =>
        import('@school-master/about-us').then((m) => m.AboutUsComponent),
    },
    {
      path: `${NAVIGATION_URL_VALUES.ABOUT_SYSTEM}`,
      loadComponent: () =>
        import('@school-master/about').then((m) => m.AboutComponent),
    },
    {
      path: `${NAVIGATION_URL_VALUES.PRIVACY_POLICY}`,
      loadComponent: () =>
        import('@school-master/privacy-policy').then(
          (m) => m.PrivacyPolicyComponent
        ),
    },
    {
      path: `${NAVIGATION_URL_VALUES.HELP}`,
      loadComponent: () =>
        import('@school-master/help').then((m) => m.HelpComponent),
    },
    {
      path: `${NAVIGATION_URL_VALUES.SEARCH_HANDLER}`,
      loadComponent: () =>
        import('@school-master/search-handler').then(
          (m) => m.SearchHandlerComponent
        ),
    },
  ];
}
export const clientFeatureRoutes: Route[] = [
  {
    path: '',
    component: ClientFeatureComponent,
    children: [...getClientFeatureChildRoutes()],
  },
];
