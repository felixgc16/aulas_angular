import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';


@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomeCursos: string;
  cursos: string[];
  constructor(private cursosService: CursosService) {
    this.nomeCursos = 'google.com';
    
    this.cursos = this.cursosService.getCursos();

   }

  ngOnInit() {
  }

}
