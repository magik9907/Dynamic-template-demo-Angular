import { Component, input } from '@angular/core';
import { AbstractTemplateComponent } from '../../dynamic-template/abstract-template/abstract-template.component';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-text-a',
    imports: [JsonPipe],
    templateUrl: './text-a.component.html',
    styleUrl: './text-a.component.scss'
})
export class TextAComponent extends AbstractTemplateComponent<string> {

  additionalInput = input<unknown>()
}
