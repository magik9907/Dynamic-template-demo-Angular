import { Routes } from '@angular/router';
import { SiteAComponent } from './site/site-a/site-a.component';
import { SiteBComponent } from './site/site-b/site-b.component';
import { EditorComponent } from './site/editor/editor.component';

export const routes: Routes = [
  { path: '', component: EditorComponent },
  { path: 'site-a', component: SiteAComponent },
  { path: 'site-b', component: SiteBComponent },
  { path: 'editor', component: EditorComponent },
  { path: '**', redirectTo: 'site-a' },
];
