import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomeCursos: string;
  cursos: string[]=["Java","Angular","Git"]
  constructor() {
     this.nomeCursos = 'google.com';
   }

  ngOnInit() {
  }

}
