import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  coor : boolean = true;
  corB : string = '';
  mudarB(){
    this.coor = !this.coor;
  }
 

  constructor() { }

  ngOnInit() {
  }

}
