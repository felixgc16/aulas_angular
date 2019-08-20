import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'curso/:id', component:CursoDetalheComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
