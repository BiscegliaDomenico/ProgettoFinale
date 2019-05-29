import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validator, FormGroup} from '@angular/forms';
import { Annuncio } from '../annuncio';
@Component({
  selector: 'app-bacheca-prodotti',
  templateUrl: './bacheca-prodotti.component.html',
  styleUrls: ['./bacheca-prodotti.component.css']
})
export class BachecaProdottiComponent implements OnInit {
  miaForm : FormGroup;
  @Input() lista;
  @Input() log;
  error : string;
  constructor(fb : FormBuilder) { 

  }

  ngOnInit() {
  }

  onAddCommento(annuncio: Annuncio, comment: HTMLInputElement ){

    

    if(this.log == true){
      annuncio.commento = comment.value;
    }
    else{
      this.error = "NON SEI LOGGATO";
    }
  }

}
