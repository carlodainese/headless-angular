import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MenuComponent } from './menu/menu.component';
import { SecurityContext } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { CreateComponent } from './create/create.component';
import { LogoutComponent } from './logout/logout.component';
import { ShowComponent } from './show/show.component';
import { FooterComponent } from './footer/footer.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    FooterComponent,
    CreateComponent,
    ShowComponent,
    ListaComponent

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
