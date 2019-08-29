import { HttpClient } from '@angular/common/http';
import { Curso } from '../cursos/cursos-lista/curso';
import { Observable } from 'rxjs';

import { tap, delay, take } from 'rxjs/operators';
export class CrudService<T> {
    
    public readonly API = 'http://localhost:3000/cursos';

    constructor(protected http: HttpClient) { }
  
    list()  {
      return this.http.get<T[]>(this.API)
      .pipe(
        delay(1000),
        tap(console.log)
      );
    }
    create(record){
      return this.http.post(this.API,record).pipe(take(1));
    }
  
    carregarId(id){
      return this.http.get<T>(`${this.API}/${id}`).pipe(take(1));
    }
  
    update(record){
      return this.http.put(`${this.API}/${record.id}`,record).pipe(take(1));
    }
  
    remove(id){
      return this.http.delete(`${this.API}/${id}`).pipe(take(1));
    }
}
