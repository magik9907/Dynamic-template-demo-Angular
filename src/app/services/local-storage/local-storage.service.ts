import { inject, Injectable } from '@angular/core';
import { IS_BROWSER } from '../../tokens/is-browser';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  isBrowser = inject(IS_BROWSER);

  setItem(key: string, value: string) {
    if (this.isBrowser) localStorage.setItem(key, value);
  }

  getItem(key: string) {
    if (this.isBrowser) return localStorage.getItem(key);
    return null;
  }
}
