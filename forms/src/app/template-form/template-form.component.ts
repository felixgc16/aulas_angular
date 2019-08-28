import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  
  usuario:any = {
    nome:'',
    email:'',
    endereco:{
      cep:'',
      bairro:'',
      rua: ''

    }
  }

  // enviar(form){
  //   // console.log(form);
  //   // console.log(this.usuario);

  //   this.http.post('enderServer/form', JSON.stringify(form.value)).pipe(
  //     map(teste),
  //     catchError(teste)
  //   )
  // }

  constructor() { }

  ngOnInit() {
  }
  

}
