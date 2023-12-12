import { Component } from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private loginService: LoginService){}



   //sign up variables
   mphone: any;
   mpassword: any;
   first_name: any;
   last_name: any;


   signUp(){
    

    const nUser = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.mphone,
        password: this.mpassword

    }

    this.loginService.senduserData(nUser)
    .subscribe((response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
      
    });




   }







}
