import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { firebaseConfig } from './firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'voting-app';

  constructor(){};

  ngOnInit(){
    firebase.initializeApp(firebaseConfig);
  }
  
}
