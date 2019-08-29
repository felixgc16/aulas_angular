import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http:HttpClient) { }

  upload(files:Set<File>,url:string){

    //Continuar a pegar os parametros do metodo a baixo
    const request = new HttpRequest('POST',url,);
  }
}
