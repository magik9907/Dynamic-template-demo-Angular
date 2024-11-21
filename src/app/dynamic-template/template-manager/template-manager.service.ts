import { computed, inject, Injectable } from '@angular/core';
import { TEMPLATE_TOKEN } from '../constant';
import { DynamicToken } from '../types';
import { AbstractTemplateComponent } from '../abstract-template/abstract-template.component';

@Injectable()
export class TemplateManagerService {
  templates: DynamicToken[] = inject<DynamicToken[]>(TEMPLATE_TOKEN, {
    optional: false,
  });
  templateMap = computed(() => {
    return this.templates.reduce(
      (buff, next) => buff.set(next.key, next),
      new Map<string, DynamicToken>(),
    );
  });
  default = computed<DynamicToken>(() => {
    if (!this.templates.length) {
      return {
        component: AbstractTemplateComponent,
        key: 'components-not-exists',
        default: true,
      };
    }
    const el = this.templates.find((x) => x.default);
    return { ...(el ?? this.templates[0]), default: true };
  });

  getComponent(key: string): DynamicToken {
    const template = this.templateMap().get(key);
    return template ? { ...template, default: false } : this.default();
  }
}
