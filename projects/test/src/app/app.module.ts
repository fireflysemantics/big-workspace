import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BigModule} from 'big'
@NgModule({
declarations: [
    AppComponent
],
imports: [
    BrowserModule,
    AppRoutingModule,
    BigModule],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }