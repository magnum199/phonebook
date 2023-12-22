import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { AddnewcontactComponent } from './addnewcontact/addnewcontact.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'addcontact', component: AddnewcontactComponent},
  {path: 'viewcontact', component: ViewcontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
