import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categorias:string[] = [
    'Ação',
    'Aventura',
    'Romance',
    'Terror',
    'Drama'
  ]



  constructor() { }

  ngOnInit() {
  }

}
