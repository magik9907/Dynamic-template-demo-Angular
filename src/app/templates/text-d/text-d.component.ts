import { Component, input } from '@angular/core';
import { AbstractTemplateComponent } from '../../dynamic-template/abstract-template/abstract-template.component';

@Component({
    selector: 'app-text-d',
    imports: [],
    templateUrl: './text-d.component.html',
    styleUrl: './text-d.component.scss'
})
export class TextDComponent extends AbstractTemplateComponent<string[]> {
  title = input<string>();
}
