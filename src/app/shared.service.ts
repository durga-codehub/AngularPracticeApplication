import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  http = inject(HttpClient)
  inLoginPage: boolean = true;
  

  constructor() { }
  loginCred =[
    {
      username:'Durga Kannan',
      password:'Durga@123',
      role:'client'
    },
    {
      username:'Administrator',
      password:'ImAdmin@123',
      role:'admin'
    }
  ]
  userRole ='client'

  loginSuccess:boolean = false;

  getUser():Observable<any>{
    return this.http.get('assets/mock.json')
  }
  postUser(data:any){
    return this.http.post('assets/mock.json',data)
  }
}


