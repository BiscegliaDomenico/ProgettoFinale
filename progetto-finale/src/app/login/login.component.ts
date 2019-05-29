import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Visible } from '../visible.model';
import { Utente } from '../utente';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() state : Visible;
  @Input() lista;
  miaForm : FormGroup;
  log : boolean;
  constructor(fb : FormBuilder) { 
    this.miaForm = fb.group({'nome':['',Validators.required],
                              'cognome':['', Validators.required],
                              'mail' : ['', [Validators.required, Validators.email]],
                              'password' : ['', Validators.required]
                            });
  }
  

  onClick()
  {
    this.state.showLogin = !this.state.showLogin;
  }
  error : string;
  onAccedi(){
    if(this.miaForm.valid){
      for(let i = 0; i<Utente.length; i ++){
        if( this.miaForm.controls['nome'].value == Utente[i].nome  && this.miaForm.controls['cognome'].value == Utente[i].cognome  && this.miaForm.controls['mail'].value == Utente[i].mail  && this.miaForm.controls['password'].value == Utente[i].password  ){
          this.log = true;
        }
      }
    }
  }
  ngOnInit() {
  }

}
