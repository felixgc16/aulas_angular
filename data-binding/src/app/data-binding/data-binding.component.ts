import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dbinding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'google.com';
  cursoAngular = true;
  urlImage= 'https://www.grancursosonline.com.br/upload/projeto/secult-ce-secretaria-da-cultura-do-estado-do-ceara.png';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
