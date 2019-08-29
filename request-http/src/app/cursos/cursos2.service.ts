import { HttpClient } from '@angular/common/http';
import { CrudService } from './../shared/crud-service';
import { Injectable } from '@angular/core';
import { Curso } from './cursos-lista/curso';

@Injectable({
  providedIn: 'root'
})


export class Cursos2Service extends CrudService<Curso> {
  
  constructor(protected http: HttpClient) {
    super(http);
  }
}
