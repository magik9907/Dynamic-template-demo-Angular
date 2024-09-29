import { Component, Provider } from '@angular/core';
import { GenerativeViewComponent } from '../../dynamic-template/generative-view/generative-view.component';
import { TemplateManagerService } from '../../dynamic-template/template-manager/template-manager.service';
import { TemplateSchema } from '../../dynamic-template/types';
import { TEMPLATE_TOKEN } from '../../dynamic-template/constant';
import { TextDComponent } from '../../templates/text-d/text-d.component';
import { TextBComponent } from '../../templates/text-b/text-b.component';
import { TextCComponent } from '../../templates/text-c/text-c.component';

interface IExample {
  title: string;
  section: (
    | {
        description: string;
        score: number;
        note?: undefined;
      }
    | {
        description: string;
        note: string;
        score?: undefined;
      }
  )[];
  dates: Date[];
  result: {
    test: string;
  };
  notes: string[];
}

export const providers_b: Provider[] = [
  {
    provide: TEMPLATE_TOKEN,
    multi: true,
    useValue: { key: 'text-d', component: TextDComponent },
  },
  {
    provide: TEMPLATE_TOKEN,
    multi: true,
    useValue: { key: 'text-b', component: TextBComponent },
  },
  {
    provide: TEMPLATE_TOKEN,
    multi: true,
    useValue: { key: 'text-c', component: TextCComponent },
  },
];

@Component({
  selector: 'app-site-b',
  standalone: true,
  providers: [...providers_b, TemplateManagerService],
  imports: [GenerativeViewComponent],
  templateUrl: './site-b.component.html',
  styleUrl: './site-b.component.scss',
})
export class SiteBComponent {
  example: IExample = {
    title: 'This is title',
    section: [
      { description: 'description', score: 0 },
      { description: 'description', note: 'note' },
    ],
    dates: [
      new Date('01-02-2023'),
      new Date('05-05-2023'),
      new Date('05-02-2022'),
    ],
    result: { test: 'test result' },
    notes: ['view', 'score', 'test'],
  };
  schema: TemplateSchema[] = [
    { objectPath: ['title'], templateKey: 'text-a' },
    { objectPath: ['section', 0, 'description'], templateKey: 'text-d' },
    {
      objectPath: ['dates'],
      mapper(data: Date[]) {
        return { data: data.map((d) => d.toLocaleString()) };
      },
      templateKey: 'text-b',
    },
    { objectPath: ['result', 'test'], templateKey: 'text-a' },
    {
      objectPath: ['section'],
      mapper(data: IExample['section']) {
        return {
          data: data.map((d) => `${d.description} ${d.note ?? d.score}`),
        };
      },
      templateKey: 'text-b',
    },
    { objectPath: ['notes'], templateKey: 'text-d' },
    {
      objectPath: ['notes'],
      mapper(data: IExample['notes'], originalData: IExample) {
        return {
          data,
          extendedData: { title: originalData.title },
        };
      },
      templateKey: 'text-c',
    },
  ];
}
