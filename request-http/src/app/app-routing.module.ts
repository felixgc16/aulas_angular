import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';


const routes: Routes = [
  {
    path: '' ,  pathMatch: 'full' ,  redirectTo: 'cursos'
  },
  {
    path:'cursos',
    loadChildren: './cursos/cursos.module#CursosModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled',
    malformedUriErrorHandler:(error:URIError, urlSerializer: UrlSerializer, url :  string)=>{
      console.log(url);
      return urlSerializer.parse('/url-invalida');
    }
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
