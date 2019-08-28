import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';

import { DataFormModule } from './data-form/data-form.module';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataFormModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
