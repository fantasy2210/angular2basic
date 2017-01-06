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
        this.title = "This is Angular 2 TutorialComponent";
        this.showLineIf = false;
        this.color = 'blue';
        this.colors = ['red', 'green', 'blue'];
    }
    TutorialComponent.prototype.OnClick = function (value) {
        console.log(value);
    };
    TutorialComponent = __decorate([
        core_1.Component({
            selector: "my-tutorial",
            template: "\n    <h2>{{title}}</h2> \n    <h3 *ngIf=\"showLineIf\">This is ngIf directive line.</h3>\n    <div [ngSwitch]=\"color\">\n        <p *ngSwitchCase=\"'red'\">This line is red</p>\n        <p *ngSwitchCase=\"'blue'\">This line is blue</p>\n        <p *ngSwitchCase=\"'green'\">This line is green</p>\n        <p *ngSwitchDefault>Invalid color</p>\n\n\n    </div>\n    <ul>\n        <li *ngFor=\"let c of colors\">This is color {{c}}</li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map