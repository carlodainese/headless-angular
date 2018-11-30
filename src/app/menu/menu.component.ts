import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {HomeService} from "../home.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit  {
  menuItems: any;
  uri: any;
  constructor(public homeService:HomeService) { 

 }

 ngOnInit(){
  this.homeService.getMenuItems().subscribe(value =>{
  this.menuItems=value;
  console.log(this.menuItems);
  for(var i=0;i<this.menuItems.length;i++){
          //this.uri.push(this.menuItems[i].uri);
          }
  //this.uri=this.cleanUrlMenu(this.uri);
  console.log(this.uri);
  //for(var i=0;i<this.menuItems.length;i++){
          // this.menuItems[i].uri=this.uri[i];
          // }
    return this.menuItems;})};

    cleanUrlMenu(body){ 
  for(var i =0;i<body.length;i++){
  body[i]=body[i].replace('src="/','src="http://drupal8.docker.localhost:8000/' )
  body[i]=body[i].replace('http://prfisv.intra.infocamere.it/','' )}
    return body;
  }
  }

