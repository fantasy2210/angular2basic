import { Component } from '@angular/core';

@Component({
    selector: "my-tutorial",
    template: `
    <h2>I am a TutorialComponent</h2> 
    <button (click)="OnClick(name.value)"> Click me</button>
    <input type="text" #name />
    `
})

export class TutorialComponent {
    title = "This is Angular 2 TutorialComponent";
    OnClick(value: string) {
        console.log(value);
    }
}