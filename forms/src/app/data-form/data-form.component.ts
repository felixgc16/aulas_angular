import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  pessoas: [] = [
    {'id' : 1, 'url': ''}
  ];
  formulario : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    // this.formulario = new FormGroup({
    //    nome: new FormControl(null),
    //    email: new FormControl(null)
    // });
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    })
  }

}
