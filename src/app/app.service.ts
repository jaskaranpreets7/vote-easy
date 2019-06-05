import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}
  
  getDetails():any{
    return this.http.get('http://voting-app-11e11.firebaseio.com/data1.json')
  }
  getMemberDetails():any{
    return this.http.get('http://voting-app-11e11.firebaseio.com/data2.json')
  }
  addVoteCount(data):any{
    return this.http.post('http://voting-app-11e11.firebaseio.com/data2.json',data)
  }
}
