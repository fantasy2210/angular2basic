import { Component } from '@angular/core';
/*
 * ngClass duoc dung de ap dung class cho 1 element dua vao gia tri cua bien
 * cu phap [ngClass]="{ten_class_1:ten_bien_1,ten_class_2:ten_bien_2,...}"
 * 
 * ngStyle duoc ap dung de dua thuoc tinh style vao 1 element dua vao gia tri cua bien, nham thay doi cach the hien
 * 
 * cu phap [ngStyle]="{'font-style: style, font-size: size'}" voi style va size la 2 bien
 * 
*/
@Component({
    selector: "my-tutorial",
    template: `
    <h2>{{title}}</h2>    
    <p [ngClass]="{classOne:cone, classTwo:ctwo}">This is a result of ngClass</p>
    <button (click)="toggle()">Change color</button>
   
    `,
    styles: [
        `
            .classOne{
                color:red
            }
            
            .classTwo{
                color:blue
            }
        `
    ]
})

export class TutorialComponent {
    title = "This is Angular 2 TutorialComponent";
    cone = false;
    ctwo = true;
    toggle() {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    }
}