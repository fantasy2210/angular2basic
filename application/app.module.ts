import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';

import { BinhPhuongPipe } from './binh-phuong.pipe';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, TutorialComponent,BinhPhuongPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
