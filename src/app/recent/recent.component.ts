import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {HomeService} from "../home.service";
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {
lists: any;

  constructor(public homeService:HomeService) { 

 }

 ngOnInit(){this.homeService.getList().subscribe(value =>{
  this.lists=value;
	console.log(this.lists);
    return this.lists;})
 
 }

}
