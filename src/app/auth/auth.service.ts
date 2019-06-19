import { Injectable } from '@angular/core';
import { Router } from  '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import  * as firebase from  'firebase/app';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;


  constructor( private firebaseAuth: AngularFireAuth, private router: Router) { 
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      user => {
        if(user){
          this.userDetails = user;
          console.log(this.userDetails);
        }else{
          this.userDetails = null;
        }
      }
    );
  }

  signInWithGoogle(){
    sessionStorage.setItem("session", '25');
    setTimeout(()=>{
      alert("Session got expired");
      this.logout()
      sessionStorage.clear();
    },Number(sessionStorage.getItem("session")) * 60000);

    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  signInWithFacebook(){
    sessionStorage.setItem("session", '25');
    setTimeout(()=>{
      alert("Session got expired");
      this.logout()
      sessionStorage.clear();
    },Number(sessionStorage.getItem("session")) * 60000);
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }
  
  
  isLoggedIn() {
    if (this.userDetails === null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    sessionStorage.clear();
    clearTimeout();
    this.firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }
}
