import { InjectionToken } from '@angular/core';
import { DynamicToken } from './types';

export const TEMPLATE_TOKEN = new InjectionToken<DynamicToken>(
  'DYNAMIC-TEMPLATE',
);
