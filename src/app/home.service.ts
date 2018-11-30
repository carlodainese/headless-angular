import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//lista di metodi con richieste http in cui non si necessita autenticazione
export class HomeService {
constructor(public http: HttpClient){} 
  getLista(){
  return this.http.get('http://drupal8.docker.localhost:8000/rest/view/attivita');
};
getList(){
  return this.http.get('http://drupal8.docker.localhost:8000/rest/content/recent?_format=json');
};

getMenuItems(){
  return this.http.get('http://drupal8.docker.localhost:8000/api/menu_items/main');
};

getAttivita(){
  return this.http.get('http://drupal8.docker.localhost:8000/attivita/'+this.$route.params.id+'?_format=hal_json');
  };

getFooter(){
  return this.http.get('http://drupal8.docker.localhost:8000/api/menu_items/footer');
}




}
