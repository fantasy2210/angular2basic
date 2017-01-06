import { Component } from '@angular/core';

@Component({
    selector: "my-tutorial",
    template: `
    <h2>I am a TutorialComponent</h2> 
    <input type="text" [(ngModel)]="fname" />
        <input type="text" [(ngModel)]="lname" />
<p>Full name: <strong>{{fname}} {{lname}}</strong></p>
    `
})

export class TutorialComponent {
    title = "This is Angular 2 TutorialComponent";
    OnClick(value: string) {
        console.log(value);
    }
}