import { Component, input } from '@angular/core';
import { AbstractTemplateComponent } from '../../dynamic-template/abstract-template/abstract-template.component';

@Component({
    selector: 'app-text-c',
    imports: [],
    templateUrl: './text-c.component.html',
    styleUrl: './text-c.component.scss'
})
export class TextCComponent extends AbstractTemplateComponent<string> {
  title = input.required<unknown>();
}
