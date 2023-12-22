import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  webserverip: string = 'localhost';
  muserphone: any;


  sendloginData(mylogindata: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://'+this.webserverip+':3000/phonebook/login', mylogindata, {headers});
  }
  senduserData(userdata: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://'+this.webserverip+':3000/phonebook/users', userdata, {headers});
  }


  getToken(){

    return localStorage.getItem('token');
  }

  verifytoken(){

    return this.http.get('http://'+this.webserverip+':3000/phonebook/verifylogin');
  }


}
