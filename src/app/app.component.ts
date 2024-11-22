import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IS_BROWSER } from './tokens/is-browser';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink],
    providers: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {}
