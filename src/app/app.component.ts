import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Title]
})
export class AppComponent implements OnInit {


  constructor(private title : Title){
    this.title.setTitle('Polling-App')
  };

  ngOnInit(){
  }
  
}
