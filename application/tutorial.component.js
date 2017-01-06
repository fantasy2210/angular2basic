"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/*
 * ngClass duoc dung de ap dung class cho 1 element dua vao gia tri cua bien
 * cu phap [ngClass]="{ten_class_1:ten_bien_1,ten_class_2:ten_bien_2,...}"
 *
 * ngStyle duoc ap dung de dua thuoc tinh style vao 1 element dua vao gia tri cua bien, nham thay doi cach the hien
 *
 * cu phap [ngStyle]="{'font-style: style, font-size: size'}" voi style va size la 2 bien
 *
*/
var TutorialComponent = (function () {
    function TutorialComponent() {
        this.title = "This is Angular 2 TutorialComponent";
        this.cone = false;
        this.ctwo = true;
    }
    TutorialComponent.prototype.toggle = function () {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    };
    TutorialComponent = __decorate([
        core_1.Component({
            selector: "my-tutorial",
            template: "\n    <h2>{{title}}</h2>    \n    <p [ngClass]=\"{classOne:cone, classTwo:ctwo}\">This is a result of ngClass</p>\n    <button (click)=\"toggle()\">Change color</button>\n   \n    ",
            styles: [
                "\n            .classOne{\n                color:red\n            }\n            \n            .classTwo{\n                color:blue\n            }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map