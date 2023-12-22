import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { ContactdataService } from '../contactdata.service';
import { Router } from '@angular/router';
import { response } from 'express';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  constructor(private contactdataService: ContactdataService, private loginService: LoginService, private _router: Router){}

 //sign in variables
  phone: any;
  password: any;
  strresp: any;
  

  logIn(){
    const logD = {
      phone: this.phone,
      password: this.password
    }
    //send user phone to loginservice
    this.loginService.muserphone = this.phone;
    
    //send login data to service
    this.loginService.sendloginData(logD)
    .subscribe((response) => {
      //console.log(response);
      this.strresp = JSON.stringify(response);
      var maxlen = this.strresp.length;
      //console.log(this.strresp);
      //console.log(this.strresp.slice(10,maxlen-2));
      var tokenonly = this.strresp.slice(10,maxlen-2);

      localStorage.setItem('token', tokenonly);

      this._router.navigate(['/menu']);
       

      
    },
    (error) => {
      //console.log(error);
      
    }

    );

  }

  opensignUp(){

    this._router.navigate(['/signup'])
    
    

  }

  deleteAll(){
    this.contactdataService.deleteAllusers()
    .subscribe((response) => {
      console.log(response);
      
    },
    (error) => {
      console.log(error);
      
    })
  }



  ngOnInit(){
      this.contactdataService.getAllusers()
      .subscribe((response) => {
        console.log(response);
        
      },
      (error) => {
        console.log(error);
        
      });
  }

}

