import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertiesComponent } from './output-properties/output-properties.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { ElvisComponent } from './elvis/elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { FundoDirective } from './shared/fundo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { TrocarcorDirective } from './shared/trocarcor.directive';



@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertiesComponent,
    NgifComponent,
    NgSwitchComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    ElvisComponent,
    NgContentComponent,
    FundoDirective,
    DiretivasCustomizadasComponent,
    TrocarcorDirective
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
