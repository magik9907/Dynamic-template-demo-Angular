import { Component, input } from '@angular/core';
import { AbstractTemplateComponent } from '../../dynamic-template/abstract-template/abstract-template.component';

@Component({
  selector: 'app-text-a',
  standalone: true,
  imports: [],
  templateUrl: './text-a.component.html',
  styleUrl: './text-a.component.scss',
})
export class TextAComponent extends AbstractTemplateComponent<string> {}
