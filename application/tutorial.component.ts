import { Component } from '@angular/core';

@Component({
    selector: "my-tutorial",
    template: `
    <h2>I am a TutorialComponent</h2>
<h3 [class.redColor]="applyClass"> Apply Class</h3>
    `,
    styles: [
        `
        .redColor{
         color:red;  
        }
        `
    ]
})

export class TutorialComponent {
    title = "Toàn Nguyễn Chanel";
    image = "http://lorempixel.com/300/300";
    welcomeText = 'I am a welcome text';
    applyClass = 1;
}