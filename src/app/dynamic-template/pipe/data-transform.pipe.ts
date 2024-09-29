import { Pipe, PipeTransform } from '@angular/core';
import { GenerativeTemplateSchema, MappedData, TemplateSchema } from '../types';

@Pipe({
  name: 'dataTransform',
  standalone: true,
})
export class DataTransformPipe implements PipeTransform {
  transform(value: unknown, schema: GenerativeTemplateSchema): MappedData {
    const data = schema.objectPath.reduce((b, n) => {
      if (Array.isArray(b)) return b[n as number];
      if (typeof b === 'object' && b !== null)
        return (b as Record<string, unknown>)[n];
      return b;
  }, value);
    return schema.mapper(data, value);
  }
}
