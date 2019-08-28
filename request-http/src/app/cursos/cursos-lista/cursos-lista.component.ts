import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { Observable, empty } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  //cursos: Curso[];
  cursando : Curso;
  cursos$: Observable<Curso[]>;


  constructor(private service: CursosService,
    private router:Router,private route: ActivatedRoute
    ) { }

  ngOnInit() {
    // this.service.list().subscribe(dados => this.cursos = dados);

    this.cursos$ = this.service.list();
  }
  onRefresh() {
    this.cursos$ = this.service.list().pipe(
      // map(),
      // tap(),
      // switchMap(),
      catchError(error => {
        console.error(error);
        // this.error$.next(true);
        
        return empty();
      })
    );
  }
  onEdit(id){
    console.log(id);
    this.router.navigate(['editar',id],{ relativeTo: this.route });
  }
  onDelete(curso){
    this.cursando = curso;  
    this.service.remove(this.cursando.id).subscribe(
      success => {
        alert(curso.nome+' foi deletado da sua vida'),
        this.onRefresh()
      },
      error => alert('error')
    );  }
}
