import { Component, Provider } from '@angular/core';
import { GenerativeViewComponent } from '../../dynamic-template/generative-view/generative-view.component';
import { TemplateManagerService } from '../../dynamic-template/template-manager/template-manager.service';
import { TemplateSchema } from '../../dynamic-template/types';
import { TEMPLATE_TOKEN } from '../../dynamic-template/constant';
import { TextAComponent } from '../../templates/text-a/text-a.component';
import { TextBComponent } from '../../templates/text-b/text-b.component';
import { TextCComponent } from '../../templates/text-c/text-c.component';

export const providers_a: Provider[] = [
  {
    provide: TEMPLATE_TOKEN,
    multi: true,
    useValue: { key: 'text-a', component: TextAComponent, default: true },
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

@Component({
    selector: 'app-site-a',
    imports: [GenerativeViewComponent],
    providers: [...providers_a, TemplateManagerService],
    templateUrl: './site-a.component.html',
    styleUrl: './site-a.component.scss'
})
export class SiteAComponent {
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
    { objectPath: '$.title', templateKey: 'text-a' },
    { objectPath: '$.section.0.description', templateKey: 'text-a' },
    {
      objectPath: '$.dates',
      mapper(data: Date[]) {
        return { data: data.map((d) => d.toLocaleString()) };
      },
      templateKey: 'text-b',
    },
    { objectPath: '$.result.test', templateKey: 'text-a' },
    {
      objectPath: '$.section.*',
      mapper(data: IExample['section']) {
        return {
          data: data.map((d) => `${d.description} ${d.note ?? d.score}`),
        };
      },
      templateKey: 'text-b',
    },
    { objectPath: '$.notes', templateKey: 'text-d' },
    {
      objectPath: '$.notes',
      mapper(data: IExample['notes'], originalData: IExample) {
        return {
          data: `${data[0]}`,
          extendedData: { title: originalData.title },
        };
      },
      templateKey: 'text-c',
    },
  ];
}
