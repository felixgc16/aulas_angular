import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  cursos : string[] = [];
  mostrarCursos :boolean = true;
  valorTeste : boolean = true;

  trocarValor(){
   this.valorTeste=!this.valorTeste;
  }
  constructor() { }

  ngOnInit() {
  }

}
