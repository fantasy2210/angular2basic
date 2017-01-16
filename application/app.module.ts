import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {EmployeeListComponent} from './employee.component';
import { AppComponent } from './app.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent,EmployeeListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
