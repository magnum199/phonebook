import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { ContactdataService } from '../contactdata.service';
import { Router } from '@angular/router';
import { findIndex } from 'rxjs';





@Component({
  selector: 'app-addnewcontact',
  templateUrl: './addnewcontact.component.html',
  styleUrl: './addnewcontact.component.css'
})
export class AddnewcontactComponent {

  constructor(private loginService: LoginService, private _router: Router, private ContactdataService: ContactdataService){}



  contact_name: any;
  phone: any;
  display_array: any = [];
  res_array: any = [];

  


  saveContact(){
    if(this.contact_name == null){
      alert('Enter Name');
    }
    else if(this.phone == null){
      alert('Enter Phone');
    }
    else {
      const newcontact = {
        contact_name: this.contact_name,
        phone: this.phone,
        userphone: this.loginService.muserphone
      }
      console.log(newcontact);
      
  
      this.ContactdataService.sendContact(newcontact)
      .subscribe((response) => {
        console.log(response);
         this.res_array[0] =  response;
        console.log(this.res_array);
  
  
        this.display_array = this.res_array[0].contacts_list.map((item: any) => {
          return {_name: item._name, phone: item._phone}
         });
  
         console.log(this.display_array);

         
  
  
        
      },
      (error) => {
        console.log(error);
        
      });
      
    }

  

    

  }


  removeContact(testt: any){
    console.log(testt);
    

    console.log(this.display_array.findIndex(testt));
    
  }



  ngOnInit(){
    //verify token
    this.loginService.verifytoken()
    .subscribe((response) => {
      console.log(response);

    },
    (error) => {
      //console.log(error.status);
      if(error.status == 200){
        this._router.navigate(['/addcontact']);
      }
      else if(error.status == 401){//Unauthorized
        this._router.navigate(['/login']);
      }
      else if(error.status == 403){//Unauthorized
        this._router.navigate(['/login']);
      }
      else if(error.status == 404){//Unauthorized
        this._router.navigate(['/login']);
      }
    });

    //get user
    var userph = this.loginService.muserphone;
    this.ContactdataService.getuserbyphone(userph)
    .subscribe((response) => {
      console.log(response);
      console.log(response);
       this.res_array[0] =  response;
      console.log(this.res_array);


      this.display_array = this.res_array[0].contacts_list.map((item: any) => {
        return {_name: item._name, phone: item._phone}
       });

       console.log(this.display_array);
    },
    (error) => {
      console.log(error);
      
    });
    
    
    
  }



}
