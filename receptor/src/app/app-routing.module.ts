import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceptorImageComponent } from './campoReceptor/receptor-image/receptor-image.component';
import { ReceptorVideoComponent } from './campoReceptor/receptor-video/receptor-video.component';


const routes: Routes = [
  {path:'',component: ReceptorImageComponent},
  {path:'video',component: ReceptorVideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
