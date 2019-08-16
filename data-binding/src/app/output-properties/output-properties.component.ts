import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  @Input() valor = 0;

  incrementa(){
    this.valor++;
  }

  decrementa(){
    this.valor--;
  }

  constructor() { }

  ngOnInit() {
  }

}
