import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {HomeService} from "../home.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  article: any;
  constructor(public homeService:HomeService) { 


 };

  ngOnInit() {
  this.homeService.getAttivita().subscribe(value =>{
  this.article=value;
  console.log(this.article);
  return this.article;})
  }

}
