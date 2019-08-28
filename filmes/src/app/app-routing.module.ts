import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:'pesquisar',component : SearchComponent},
  {path: '', component: ContentComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
