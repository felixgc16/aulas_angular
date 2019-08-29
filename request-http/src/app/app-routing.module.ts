import { UploadFileModule } from './upload-file/upload-file.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';


const routes: Routes = [
  {
    path: '' ,  pathMatch: 'full' ,  redirectTo: 'upload'
  },
  {
    path:'cursos',
    loadChildren: './cursos/cursos.module#CursosModule'
  },
  {
    path:'upload',
    loadChildren: './upload-file/upload-file.module#UploadFileModule'
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
