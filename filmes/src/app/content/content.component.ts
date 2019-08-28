import { FilmesService } from './../services/filmes.service';
import { Component, OnInit, Output, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  film : FilmesService;
  filmes : any[] = []; 

  constructor() {
    this.film =  new FilmesService();
   }

  ngOnInit() {
    this.filmes = this.film.getFilmes();
  }

 

  mostrar(id){
    this.filmes[id-1].ativado = true;
  }
  
  esconder(id){
    this.filmes[id-1].ativado = false;
  }
 
  
}


