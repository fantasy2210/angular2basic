import { Component, ViewChild } from '@angular/core';
import { TutorialComponent } from './tutorial.component';
@Component({
  selector: 'my-app',
  templateUrl: 'application/app.component.html',
  styleUrls: ['application/app.component.css']
})
export class AppComponent {
  public title = 'TD chanel';
  public cities= [{ id: 1, name: 'Việt Nam' }, { id: 2, name: 'Thái Lan' }];
  onSubmit(value: any) {
    console.log(value);
  }
}
