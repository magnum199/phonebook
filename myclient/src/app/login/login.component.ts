import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  constructor(private loginService: LoginService, private _router: Router){}

 //sign in variables
  phone: any;
  password: any;
  strresp: any;
  

  logIn(){
    const logD = {
      phone: this.phone,
      password: this.password
    }
    
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

  signUp(){

  }




  ngOnInit(){
      //console.log('heloooo');
  }

}

