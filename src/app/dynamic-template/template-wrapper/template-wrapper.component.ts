import {
  Component,
  computed,
  inject,
  input,
  ViewContainerRef,
} from '@angular/core';
import { TemplateManagerService } from '../template-manager/template-manager.service';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { MappedData, TemplateSchema } from '../types';

@Component({
    selector: 'app-template-wrapper',
    imports: [NgComponentOutlet],
    providers: [],
    templateUrl: './template-wrapper.component.html',
    styleUrl: './template-wrapper.component.scss'
})
export class TemplateWrapperComponent {
  templateServce = inject(TemplateManagerService);

  key = input.required<string>();
  data = input.required<unknown>();
  extendedData = input<MappedData['extendedData']>({});
  schema = input.required<TemplateSchema>();

  component = computed(() => {
    return this.templateServce.getComponent(this.key());
  });

  componentInputs = computed(() => {
    return {
      ...this.extendedData(),
      data: this.data(),
      default: this.component().default,
    };
  });
}
