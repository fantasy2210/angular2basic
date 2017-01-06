import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>Xin chào {{name}} Tôi là AppComponent</h1>
    <my-tutorial></my-tutorial>
    `,
})
export class AppComponent { name = 'Angular'; }
