import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {HomeService} from "./home.service";
import {AuthService} from "./auth.service";
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [
    MenuComponent,
    LoginComponent
  ],
})
export class AppComponent implements MenuComponent{

  constructor(public homeService:HomeService){}


ngOnInit() {}
       }
    
    

 
