import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {EmployeeListComponent} from './employee.component';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [BrowserModule, FormsModule,HttpModule],
    declarations: [AppComponent,EmployeeListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
