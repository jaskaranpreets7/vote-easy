import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }
  
  signInWithGoogle(){
    this.authService.signInWithGoogle()
      .then( res => this.router.navigate(['home']))
      .catch( err => console.log(err))
  }

  signInWithFacebook(){
    this.authService.signInWithFacebook()
      .then( res => this.router.navigate(['home']))
      .catch( err => console.log(err))
  }

}
