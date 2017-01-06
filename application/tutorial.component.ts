import { Component } from '@angular/core';

@Component({
    selector: "my-tutorial",
    template: `
    <h2>{{title}}</h2> 
    <h3 *ngIf="showLineIf">This is ngIf directive line.</h3>
    <div [ngSwitch]="color">
        <p *ngSwitchCase="'red'">This line is red</p>
        <p *ngSwitchCase="'blue'">This line is blue</p>
        <p *ngSwitchCase="'green'">This line is green</p>
        <p *ngSwitchDefault>Invalid color</p>


    </div>
    <ul>
        <li *ngFor="let c of colors">This is color {{c}}</li>
    </ul>
    `
})

export class TutorialComponent {
    title = "This is Angular 2 TutorialComponent";
    showLineIf = false;
    color='blue';
    colors:string[]=['red','green','blue'];
    OnClick(value: string) {
        console.log(value);
    }
}