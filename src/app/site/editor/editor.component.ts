import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import {
  DATA,
  MAPPER_EXAMPLE_CODE,
  STORAGE_KEY,
  TRANSFORM_DATA,
  TRANSFORM_KEY,
} from './constants';
import { TransformData } from './types';
import { MatExpansionModule } from '@angular/material/expansion';
import { TransformationComponent } from './components/transformation/transformation.component';
import { v4 as uuidv4 } from 'uuid';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { TemplateManagerService } from '../../dynamic-template/template-manager/template-manager.service';
import { TextAComponent } from '../../templates/text-a/text-a.component';
import { TEMPLATE_TOKEN } from '../../dynamic-template/constant';
import { TextBComponent } from '../../templates/text-b/text-b.component';
import { TextCComponent } from '../../templates/text-c/text-c.component';
import { GenerativeViewComponent } from '../../dynamic-template/generative-view/generative-view.component';
import { TemplateSchema } from '../../dynamic-template/types';
import { NgTemplateOutlet } from '@angular/common';
import { IS_BROWSER } from '../../tokens/is-browser';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [
    MatTabsModule,
    MatExpansionModule,
    MonacoEditorModule,
    FormsModule,
    GenerativeViewComponent,
    MatButtonModule,
    TransformationComponent,
    NgTemplateOutlet,
  ],
  providers: [
    {
      provide: TEMPLATE_TOKEN,
      multi: true,
      useValue: { key: 'text-a', component: TextAComponent, default: true },
    },
    {
      provide: TEMPLATE_TOKEN,
      multi: true,
      useValue: { key: 'text-b', component: TextBComponent },
    },
    {
      provide: TEMPLATE_TOKEN,
      multi: true,
      useValue: { key: 'text-c', component: TextCComponent },
    },
    TemplateManagerService,
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent {
  localStorageService = inject(LocalStorageService);
  readonly editorOptions = { theme: 'vs-dark', language: 'json'};

  data = signal<string>(this.localStorageService.getItem(STORAGE_KEY) ?? DATA);
  dataObject = computed(() => JSON.parse(this.data()));
  transformData = signal<TransformData[]>(this.getTransformData());

  transformSchema = computed<TemplateSchema[]>(() => {
    return this.transformData().map<TemplateSchema>((v) => ({
      objectPath: v.selector ?? '',
      templateKey: v.componentKey ?? '',
      mapper: function (_data, _originalData) {
        let data = Object.freeze(_data);
        let originalData = Object.freeze(_originalData);
        const result = eval(v.mapper);
        console.group('Transform', v.id);
        console.log('Arguments passed to function', { data, originalData });
        console.log('Result of function', result);
        console.groupEnd();
        if (typeof result === 'object' && !('data' in result)) {
          throw 'Mapped function must be in format: {data: <value>, extendedData: {[key:string]:any}}';
        } else return result;
      },
    }));
  });
  selected = signal(0);

  readonly isBrowser = inject(IS_BROWSER);

  setData(data: string) {
    this.data.set(data);
    this.saveData();
  }

  reset() {
    this.resetData();
    this.resetTranformData();
  }

  resetData() {
    this.data.set(DATA);
    this.saveData();
  }

  resetTranformData() {
    this.transformData.set([{ ...TRANSFORM_DATA }]);
    this.saveTransformData();
  }

  removeTransformation(id: string) {
    this.transformData.set(this.transformData().filter((v) => v.id !== id));
    this.saveTransformData();
  }

  addTransformation() {
    const v = this.transformData();
    this.transformData.set([
      ...v,
      {
        id: uuidv4(),
        componentKey: '',
        selector: '$.title',
        order: Number.MAX_SAFE_INTEGER,
        mapper: MAPPER_EXAMPLE_CODE,
      },
    ]);
    this.saveTransformData();
  }

  updateTransformation(value: TransformData) {
    this.transformData.update((v) => {
      const newValue = [...v];
      newValue[v.findIndex((e) => e.id === value.id)] = value;
      return newValue;
    });
    const v = this.transformData();
    const newValue = [...v];
    newValue[v.findIndex((e) => e.id === value.id)] = value;
    this.transformData.set(newValue);
    this.saveTransformData();
  }

  private getTransformData(): TransformData[] {
    const storageData = this.localStorageService.getItem(TRANSFORM_KEY);
    const data = storageData ? JSON.parse(storageData) : [];
    return Array.isArray(data) ? data : [];
  }

  private saveTransformData() {
    this.localStorageService.setItem(
      TRANSFORM_KEY,
      JSON.stringify(this.transformData()),
    );
  }

  private saveData() {
    this.localStorageService.setItem(STORAGE_KEY, this.data());
  }
}
