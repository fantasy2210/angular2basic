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
var TutorialComponent = (function () {
    function TutorialComponent() {
        this.title = "Toàn Nguyễn Chanel";
        this.image = "http://lorempixel.com/300/300";
        this.welcomeText = 'I am a welcome text';
        this.applyClass = 1;
    }
    TutorialComponent = __decorate([
        core_1.Component({
            selector: "my-tutorial",
            template: "\n    <h2>I am a TutorialComponent</h2>\n<h3 [class.redColor]=\"applyClass\"> Apply Class</h3>\n    ",
            styles: [
                "\n        .redColor{\n         color:red;  \n        }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map