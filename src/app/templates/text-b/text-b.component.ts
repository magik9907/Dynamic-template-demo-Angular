import { Component, input } from '@angular/core';
import { AbstractTemplateComponent } from '../../dynamic-template/abstract-template/abstract-template.component';

@Component({
    selector: 'app-text-b',
    imports: [],
    templateUrl: './text-b.component.html',
    styleUrl: './text-b.component.scss'
})
export class TextBComponent extends AbstractTemplateComponent<string[]> {}
