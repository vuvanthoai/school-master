export enum NAVIGATION_URL_VALUES {
  CONTACT = 'contact',
  ABOUT_US = 'about-us',
  ABOUT_SYSTEM = 'about-system',
  LOGIN = 'login',
  REGISTRATION = 'registration',
  SCHOOL = 'school',
  ADMINISTRATOR_ROOT = 'administrator',
  DASHBOARD = 'dashboard',
  CONFIGURATION = 'configuration',
  RESET_PASSWORD = 'reset-password',
  FORGOT_PASSWORD = 'forgot-password',
  PRIVACY_POLICY = 'privacy-policy',
  USER_SLUG = 'user-slug',
  SCHOOL_SLUG = 'school-slug',
  HELP = 'help',
  SEARCH_HANDLER = 'search',
}

export enum CookieKey {
  AccessToken = 'access_token',
  RefreshToken = 'refresh_Token',
  ActiveUser = 'active_user',
}

export interface User {
  email: string;
  password: string;
}

export const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g
