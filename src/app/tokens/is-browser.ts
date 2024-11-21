import { isPlatformBrowser } from '@angular/common';
import { inject, InjectionToken, PLATFORM_ID } from '@angular/core';

export const IS_BROWSER = new InjectionToken<boolean>(
  'True if platform is browser',
  {
    providedIn: 'root',
    factory: () => {
      const platformId = inject(PLATFORM_ID);

      return isPlatformBrowser(platformId);
    },
  },
);
