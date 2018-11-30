import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name: '';
pass: '';
csrf: any;
jwt: any;
logoutToken: any;
authenticated: boolean;
nome= localStorage.getItem('name');

constructor(public authService: AuthService) { };
ngOnInit() {this.checkAuth();
console.log(this.authenticated);};

getName() {
    var nField = document.getElementById('nField').value;
    this.name= nField;
     
};

getPass() {
    var pField = document.getElementById('pField').value;
    this.pass= pField;
     
};

LogIn(){
this.getName();
this.getPass();

  let data = {
                name: this.name,
                pass: this.pass
            };

 console.log(data);
  this.authService.HLogin(data).subscribe(response =>{
  this.csrf = response.csrf_token;
  this.logoutToken = response.lgout_token;
  console.log("Risposta client");
  this.authService.getJWT(this.csrf).subscribe(value =>{
  this.jwt= value.token;
  console.log(this.jwt);
  console.log(this.csrf);
  localStorage.setItem('name', this.name);
  localStorage.setItem('csrf', this.csrf);
  localStorage.setItem('id_token', this.jwt);
  localStorage.setItem('log', this.logoutToken);
  console.log("SALVATI jwt e csrf");
  this.authenticated = true;})
})
 
};

 LogOut(){
  this.name = '';
            this.pass = '';
            this.jwt = '';
            this.csrfToken = '';
            this.logoutToken = '';
 
 localStorage.removeItem('id_token');
 localStorage.removeItem('csrf');
 localStorage.removeItem('log');
 console.log("Logout");
	this.authenticated = false;
  window.location.reload();

};

checkAuth() {
    var a = localStorage.getItem('id_token');
    if(a) {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
   
  }

  

}
