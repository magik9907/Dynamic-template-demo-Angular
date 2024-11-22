import { Component, computed, inject, model } from '@angular/core';
import { TransformData } from '../../types';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TemplateManagerService } from '../../../../dynamic-template/template-manager/template-manager.service';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { IS_BROWSER } from '../../../../tokens/is-browser';

@Component({
    selector: 'app-transformation',
    imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MonacoEditorModule,
    ],
    templateUrl: './transformation.component.html',
    styleUrl: './transformation.component.scss'
})
export class TransformationComponent {
  readonly isBrowser = inject(IS_BROWSER);
  readonly editorOptions = { theme: 'vs-dark', language: 'javascript' };

  model = model.required<TransformData>();

  templateManager = inject(TemplateManagerService);

  templateKeys = computed(() => {
    return [...this.templateManager.templateMap().keys()];
  });

  selector(selector: string) {
    this.model.set({ ...this.model(), selector });
  }

  componentKey(componentKey: string) {
    this.model.set({ ...this.model(), componentKey });
  }

  mapper(mapper: string) {
    this.model.set({ ...this.model(), mapper });
  }
}
