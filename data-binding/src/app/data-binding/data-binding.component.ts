import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dbinding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  valorAtualInput: String = "";
  valorSalvo='';
  url = 'google.com';
  cursoAngular = true;
  urlImage= 'https://www.grancursosonline.com.br/upload/projeto/secult-ce-secretaria-da-cultura-do-estado-do-ceara.png';
  pessoa: any = {
      nome: 'leonardo',
      idade : 20
  }
  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }
 
  botaoClicado(){
    alert("botão clicado")
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtualInput=((<HTMLInputElement>evento.target).value);
    
  }

  salvarValor(valor){
    this.valorSalvo=valor;
  }
  constructor() { }

  ngOnInit() {
  }

}
