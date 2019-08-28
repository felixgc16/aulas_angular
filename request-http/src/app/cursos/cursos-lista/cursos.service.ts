import { Curso } from './curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Observable } from 'rxjs';
import { delay, tap, take } from 'rxjs/operators';
// import { tap } from 'xrjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) { }

  list() : Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API)
    .pipe(
      delay(1000),
      tap(console.log)
    );
  }
  create(curso){
    return this.http.post(this.API,curso).pipe(take(1));
  }

  carregarId(id){
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }

  update(curso){
    return this.http.put(`${this.API}/${curso.id}`,curso).pipe(take(1));
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
