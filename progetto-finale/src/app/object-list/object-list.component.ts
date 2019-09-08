import { Component, OnInit, Input } from '@angular/core';
import {Utente} from '../utente';
@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.css']
})
export class ObjectListComponent implements OnInit {
  @Input() lista;
  constructor() { }

  ngOnInit() {
  }

}
