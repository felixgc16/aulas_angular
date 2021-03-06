import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { SamComponent } from './sam/sam.component';
import { CursosModule } from './cursos/cursos.module';


@NgModule({
  declarations: [
    AppComponent,
   
    MeuSegundoComponent,
    SamComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
