import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

constructor(private loginService: LoginService, private _router: Router){}


gotoAddcontact(){
  this._router.navigate(['/addcontact']);
  
}

gotoEditcontacts(){
  this._router.navigate(['/viewcontact']);
  
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
        
        this._router.navigate(['/menu']);
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
    
    
    
  }

}
