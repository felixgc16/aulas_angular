import { FilmesService } from './../services/filmes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  valorAtualInput='';
  status:boolean = false;
  pesquisa:string='';
  leonardo: string = '';

  filmesService : FilmesService;
  filmes:any[] = [];
  vp:string = '';

  pesquisando(evento: KeyboardEvent){
    this.leonardo=((<HTMLInputElement>evento.target).value);
    if(this.status!=true){
      this.status=true;
    }
    if(this.leonardo==''){
      this.status=false;  
    }
  }
  saindo(){
    this.status=false;
  }
  constructor() {  
    this.filmesService = new FilmesService();
  }
  mostrar(id){
    this.filmes[id-1].ativado = true;
  }
  
  esconder(id){
    this.filmes[id-1].ativado = false;
  }
 
 
  ngOnInit() {
    this.filmes = this.filmesService.getFilmes();
  }

  testando(){
    this.filmes.forEach( filme => {
      if(filme.nome == this.vp){
        this.filmes[filme.id-1].pes = true;
      }
    });
  }

}
