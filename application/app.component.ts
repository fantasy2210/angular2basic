import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './tutorial.component';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title | uppercase}}</h1>
    <p>Date: {{today | date:'fullDate' | uppercase}}</p>
        <p>Percent: {{_10percent | percent}}</p>
        <p>e: {{e | number:'1.2'}}</p>
        
        <p>Binh phuong {{2|binhPhuong:4}}</p>

    <my-tutorial></my-tutorial>
    `,
})
export class AppComponent {
    title = 'TD chanel';
    _10percent = 0.1;
    today = Date.now();
    e: number = 2.83912391263127;
}
