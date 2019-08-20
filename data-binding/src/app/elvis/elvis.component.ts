import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elvis',
  templateUrl: './elvis.component.html',
  styleUrls: ['./elvis.component.css']
})
export class ElvisComponent implements OnInit {

  tarefa= {
    desc: 'Descrição da tarefa',
    respon: null
  }

  constructor() { }

  ngOnInit() {
  }

}
