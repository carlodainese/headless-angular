import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {HomeService} from "../home.service";
import {AuthService} from "../auth.service";
import { NgModule } from '@angular/core';


@Component({
  selector: 'lista-root',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'], 
})
export class ListaComponent implements OnInit{
lists: any;
titolo: any;
  constructor(public homeService:HomeService) {};


ngOnInit() {
this.homeService.getLista().subscribe(value =>{
  this.lists=value;
	console.log(this.lists);
	console.log(this.lists[0].Titolo);
	// necessario un ciclo per la gestione del Titolo descritto in html. (Vedi documentazione)
});


}
}
       
    
    

 
