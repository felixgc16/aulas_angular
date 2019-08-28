import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receptor-image',
  templateUrl: './receptor-image.component.html',
  styleUrls: ['./receptor-image.component.scss']
})
export class ReceptorImageComponent implements OnInit {
  valorI:string='';
  contador:number=1;
  imagens:string[] = [];

  salvar(valor){
    this.imagens[this.contador-1] = valor;
    this.contador++;
  }
  
  recebertam(){
    return this.imagens.length;
  }

  constructor() { }
 
  ngOnInit() {
    
  }

}
