import { CursosService } from './../cursos-lista/cursos.service';
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve
} from "@angular/router";
import { Observable, of } from "rxjs";
import { Curso } from "../cursos-lista/curso";

@Injectable({
  providedIn: "root"
})
export class CourseResouverGuard implements Resolve<Curso> {
  constructor(private service: CursosService) {

  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Curso | Observable<Curso> | Promise<Curso> {
    if (route.params && route.params["id"]) {
      return this.service.carregarId(route.params['id']);
    }

    return of({
      id: null,
      nome: null
    })
  }
}
