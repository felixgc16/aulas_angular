import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  classDesejada:boolean = true ;
  btn:string="primary";
  trocarBtn(){
    if(this.btn=="primary"){
      this.btn ="dark";
    }else{
      this.btn = "primary";
    }
  }
  trocarClass(){
    this.classDesejada=!this.classDesejada;
    this.trocarBtn();
  }
  constructor() { }

  ngOnInit() {
  }

}
