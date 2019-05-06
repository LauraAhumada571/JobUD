import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/Component/login/login.component';
import {RegisterComponent } from '../app/Component/register/register.component';
import { AppComponent } from './app.component';
 
const routes: Routes = [];

export const rootRouterConfig: Routes = [

 
  { path: 'login', component: LoginComponent },
  { path: '#empresario', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }