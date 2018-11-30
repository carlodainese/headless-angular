import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {HomeService} from "../home.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit  {
  menuItems: any;
  constructor(public homeService:HomeService) { 

 }

 ngOnInit(){
  this.homeService.getFooter().subscribe(value =>{
  this.menuItems=value;
  console.log(this.menuItems);
    return this.menuItems;})}
  }

