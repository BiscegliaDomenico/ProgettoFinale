import { Component, OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  miaForm : FormGroup;
  constructor(fb : FormBuilder) { 
    this.miaForm = fb.group({'nome':['',Validators.required],
                              'cognome':['', Validators.required],
                              'mail' : ['', [Validators.required, Validators.email]],
                              'password' : ['', Validators.required]
                            });
  }

  ngOnInit() {
  }

}
