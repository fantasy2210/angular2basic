import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, TutorialComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
