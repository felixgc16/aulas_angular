import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  arrayFor = [1,"leonardo",2545.69];

  constructor() { }

  ngOnInit() {
  }

}
