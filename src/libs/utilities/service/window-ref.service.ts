import { Injectable } from '@angular/core';

@Injectable()
export class WindowRef {
  get nativeWindow(): any {
    return this._window();
  }

  _window(): any {
    // return the global native browser window object
    return window;
  }
}
