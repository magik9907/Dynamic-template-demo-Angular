import { Component, input } from '@angular/core';

@Component({
  selector: 'app-abstract-template',
  standalone: true,
  imports: [],
  templateUrl: './abstract-template.component.html',
  styleUrl: './abstract-template.component.scss',
})
export class AbstractTemplateComponent<Data> {
  data = input.required<Data>();
  default = input<boolean>(false);
}
