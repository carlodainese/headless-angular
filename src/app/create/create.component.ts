import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {AuthService} from "../auth.service";
import {HomeService} from "../home.service";
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
model: any = {};
authenticated: Login.authenticated;
constructor(public authService: AuthService) { };
ngOnInit() {};


 getTitle() {
    var nameField = document.getElementById('nameField').value;
    this.model.title=  nameField;
     
};

getBody() {
    var bodyField = document.getElementById('bodyField').value;
    this.model.body= bodyField;
     
};


Create(){
this.getTitle();
this.getBody();
console.log(this.model.title);
console.log(this.model.body);
  let data = ({
  "type":[{"target_id":"article"}],
  "title":[{"value": this.model.title}],
  "body":[{"value": this.model.body}]
});
console.log(data);
this.authService.getCreate(data).subscribe(value =>{
 console.log('DONE');
});
  console.log('DONE');
};

}
