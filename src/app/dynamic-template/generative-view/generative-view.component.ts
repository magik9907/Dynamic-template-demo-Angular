import { Component, input } from '@angular/core';
import { TemplateWrapperComponent } from '../template-wrapper/template-wrapper.component';
import { GenerativeTemplateSchema, TemplateSchema } from '../types';
import { DataTransformPipe } from '../pipe/data-transform.pipe';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-generative-view',
  standalone: true,
  imports: [TemplateWrapperComponent, DataTransformPipe, JsonPipe],
  templateUrl: './generative-view.component.html',
  styleUrl: './generative-view.component.scss',
})
export class GenerativeViewComponent {
  schema = input.required({
    transform: (data: TemplateSchema[]): GenerativeTemplateSchema[] => {
      return data.map((d) => ({
        ...d,
        mapper: d.mapper ?? ((data) => ({ data })),
        id: `${d.templateKey}-${Math.random() * 10000}`,
      }));
    },
  });
  data = input.required<object>();
}
