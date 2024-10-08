import { Pipe, PipeTransform } from '@angular/core';
import { GenerativeTemplateSchema, MappedData, TemplateSchema } from '../types';
import { JSONPath } from 'jsonpath-plus';

@Pipe({
  name: 'dataTransform',
  standalone: true,
})
export class DataTransformPipe implements PipeTransform {
  transform(value: object, schema: GenerativeTemplateSchema): MappedData {
    const data = JSONPath({ path: schema.objectPath, json: value });
    return schema.mapper(data, value);
  }
}
