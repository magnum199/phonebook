import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ContactdataService {

  constructor(private http: HttpClient) {}

  webserverip: string = 'localhost';


  sendContact(contactinfo: any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://'+this.webserverip+':3000/phonebook/users/mycontacts', contactinfo, {headers});
  }


  getAllusers(){

    return this.http.get('http://'+this.webserverip+':3000/phonebook/users/allusers');
  }

  getuserbyphone(mphone: any){

    return this.http.get('http://'+this.webserverip+':3000/phonebook/users/'+mphone);
  }

  deleteAllusers(){

    return this.http.delete('http://'+this.webserverip+':3000/phonebook/users/mycontacts/deleteall');
  }

  deleteuserbyphone(mphone: any){

    return this.http.delete('http://'+this.webserverip+':3000/phonebook/users/mycontacts/:'+mphone);
  }
  


}
