import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(public http: HttpClient) { }
  
 HLogin(data){
 console.log(data);
  return this.http.post('http://drupal8.docker.localhost:8000/user/login?_format=json',data,this.setHttpHeaderL());
};

checkAuth() { // funzione di controllo per verificare l'autenticazione
    var a = localStorage.getItem('id_token')
    if(a) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  };

setHttpHeaderL(){ //primo header per il login
  const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
  let options = { headers: headers};
    console.log(options);
  return options;
};

setHttpHeader() { //header da utilizzare per ogni contenuto visibile con autenticazione
  const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json').set('X-CSRF-Token': +localStorage.getItem('csrf')).set('Authorization': 'Bearer ' + localStorage.getItem('id_token'));
  let options = { headers: headers};
  return options;
};

getJWT(csrf){
return this.http.get('http://drupal8.docker.localhost:8000/jwt/token?_format=json',this.setHttpHeader2(csrf));
};

getCreate(data){ //metodo post per creare contenuto
  return this.http.post('http://drupal8.docker.localhost:8000/node?_format=json',data, this.setHttpHeader());
};


setHttpHeader2(csrf) { //secondo header per ottenere il jwt da GET
  const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json').set('X-CSRF-Token', csrf).set('Authorization', 'Basic aWxlbjppbGVu=');
  let options = { headers: headers};
   console.log(options);
  return options;
};

setHeader() { 
  const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json').set('X-CSRF-Token', csrf).set('Authorization', 'Basic aWxlbjppbGVu=');
  let options = { headers: headers};
   console.log(options);
  return options;
};


  
}
