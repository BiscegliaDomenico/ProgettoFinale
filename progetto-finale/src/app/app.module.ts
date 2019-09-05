import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';
import { BachecaProdottiComponent } from './bacheca-prodotti/bacheca-prodotti.component';
import { LoginComponent } from './login/login.component';
import { NewObjectComponent } from './new-object/new-object.component';
import { NewPostComponent } from './new-post/new-post.component';
import { UserObjectComponent } from './user-object/user-object.component';
import { ObjectListComponent } from './object-list/object-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
    ListaUtentiComponent,
    BachecaProdottiComponent,
    LoginComponent,
    NewObjectComponent,
    NewPostComponent,
    UserObjectComponent,
    ObjectListComponent
  ],
  imports: [
    BrowserModule,  NgbModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
