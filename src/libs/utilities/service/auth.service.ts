import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { CookieKey, User } from '@school-master/utilities/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _activeUser$ = new BehaviorSubject<User | undefined>(undefined);

  constructor(private cookieService: CookieService) {
    const activeUser = cookieService.get(CookieKey.ActiveUser);
    if (activeUser) {
      this._activeUser$.next(
        JSON.parse(cookieService.get(CookieKey.ActiveUser))
      );
    }
  }

  getActiveUser$(): BehaviorSubject<User | undefined> {
    return this._activeUser$;
  }

  setActiveUser$(value: User | undefined) {
    this._activeUser$.next(value);
  }
}
