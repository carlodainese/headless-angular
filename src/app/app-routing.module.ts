import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { CreateComponent } from './create/create.component';
import { LogoutComponent } from './logout/logout.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [
{path: '', component: LoginComponent,
outlet:'l'},
 { path: '', component: MenuComponent, outlet:'secondary' },
 { path: '', component: FooterComponent, outlet:'three' },
  { path: '', component: ListaComponent, outlet:'q' },
   { path: 'lista-attivita', component: ListaComponent },
{path: 'login', component:LoginComponent},
{path: 'f', component: FooterComponent},
{path: 'node/add/attivita', component: CreateComponent},
{path: 'create', component: CreateComponent},
{ path: 'attivita/:id',component: ShowComponent}],
@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
