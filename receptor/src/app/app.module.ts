import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceptorImageComponent } from './campoReceptor/receptor-image/receptor-image.component';
import { ReceptorVideoComponent } from './campoReceptor/receptor-video/receptor-video.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceptorImageComponent,
    ReceptorVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
