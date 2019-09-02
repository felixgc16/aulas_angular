import { UploadFileService } from './../upload-file.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  nda='';
  files: Set<File>;
  constructor(private service:UploadFileService) { }

  ngOnInit() {
  }

  onChange(evento){
    this.files = new Set();

     const selectedFiles = <FileList>evento.srcElement.files;
     this.files.add(selectedFiles[0]);
    // document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;
    this.nda = selectedFiles[0].name;
    console.log(this.nda);
  }
  onUpload(){
    if(this.files && this.files.size > 0){
      this.service.upload(this.files, 'http://localhost:8000/upload').subscribe(
        response => console.log("upload concluido")
      );
    }
  }
}
