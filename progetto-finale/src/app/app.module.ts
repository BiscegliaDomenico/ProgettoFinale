import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
    ListaUtentiComponent
  ],
  imports: [
    BrowserModule,  NgbModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
