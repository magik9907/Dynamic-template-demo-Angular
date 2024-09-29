import { Type } from '@angular/core';

export interface DynamicToken {
  component: Type<unknown>;
  key: string;
  default?: boolean;
}

/**
 * Result of mapped function from @see TemplateSchema
 */
export interface MappedData {
  // data assigned to `@Input data`
  data: any;
  // custom input element declared in component from objectPath param
  extendedData?: Record<string, any>;
}

export interface TemplateSchema {
  objectPath: (string | number)[];
  mapper?: (data: any, originalData: any) => MappedData;
  templateKey: string;
}

export interface GenerativeTemplateSchema extends Required<TemplateSchema> {
  id: string;
}
