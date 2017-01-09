import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './tutorial.component';
@Component({
    selector: 'my-app',
    templateUrl: 'application/app.component.html'
})
export class AppComponent {
    title = 'TD chanel';
    onSubmit(value: any) {
        console.log(value);
    }
}
