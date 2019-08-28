import { Component, OnInit, ElementRef, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { write } from 'fs';

@Component({
  selector: 'app-receptor-video',
  templateUrl: './receptor-video.component.html',
  styleUrls: ['./receptor-video.component.scss']
})
export class ReceptorVideoComponent implements OnInit {
 
  
  urlVideo: string = '';

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
    
  }

  
}
