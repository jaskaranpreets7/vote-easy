import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public showPolls:boolean = true;

  constructor(private http: HttpClient ) {}
  
  getDetails():any{
    return this.http.get('https://voting-app-11e11.firebaseio.com/data1.json')
  }

  getMemberDetails():any{
    return this.http.get('https://voting-app-11e11.firebaseio.com/data2.json')
  }

  addVoteCount(data, key):any{
   this.http.put(`https://voting-app-11e11.firebaseio.com/data2/${key}.json`, data)
      .subscribe(
        res => console.log("Put Request is Succesfull"),
        error => console.log('Error', error)
      )
  }
  
  showPollChart(){
    return this.showPolls = false;
  }
}
 