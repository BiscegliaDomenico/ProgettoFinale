import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Annuncio} from '../annuncio';
import { Utente } from '../utente';
@Component({
  selector: 'app-new-object',
  templateUrl: './new-object.component.html',
  styleUrls: ['./new-object.component.css']
})
export class NewObjectComponent implements OnInit {

  miaForm : FormGroup;
  @Input() utenteLoggato: Utente;
  @Input() lista;

  constructor(fb : FormBuilder) {
    this.miaForm = fb.group({'oggetto':['',Validators.required],
                              'descrizione':['', Validators.required]
                            });
  }

  ngOnInit() {
  }
   onAggiungiOggetto()
  {
    if (this.miaForm.valid)
    {
      let object : Annuncio = new Annuncio();
      object.nome= this.utenteLoggato.nome;
      object.cognome= this.utenteLoggato.cognome;
      object.prodotto = String (this.miaForm.controls['oggetto'].value);
      object.descrizione = String(this.miaForm.controls['descrizione'].value);

      this.lista.push(object);
    }

  }

}
