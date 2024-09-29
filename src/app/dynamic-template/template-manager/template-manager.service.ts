import { computed, inject, Injectable } from '@angular/core';
import { TEMPLATE_TOKEN } from '../constant';
import { DynamicToken } from '../types';

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
  default = computed(() => {
    const el = this.templates.find((x) => x.default);
    return { ...(el ?? this.templates[0]), default: true };
  });
  constructor() {
    console.log('List of available component in template', this.templates);
  }

  getComponent(key: string): DynamicToken {
    return this.templateMap().get(key) ?? this.default();
  }
}
