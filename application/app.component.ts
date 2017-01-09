import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './tutorial.component';
@Component({
    selector: 'my-app',
    template: `
    <h1>Xin chào {{name}} Tôi là AppComponent</h1>
    
    <input type="text" #textName (keyup)="0"/>
    Result: Agree: {{agree}}; Disagree: {{disgree}}
    <button (click)="changeTutorialComponentName()">Change TutorialComponent name property</button>
    <my-tutorial *ngFor="let item of names" [name]="item" (onVote)="parentVote($event)"></my-tutorial>
    `,
})
export class AppComponent {
    title = 'TD chanel';
    agree = 0;
    disgree = 0;
    public names = ['Mr A', 'Mr B', 'Mr C', 'Mr D'];

    parentVote(output: boolean) {
        if (output) this.agree++;
        else this.disgree++;
    }

    //Khai báo và thay đổi giá trị của component khác

    @ViewChild(TutorialComponent)
    private tutorialComponent: TutorialComponent;
    
    changeTutorialComponentName(){
        this.tutorialComponent.name='new Name -- Set from AppComponent';
    }
}
