import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-departamento',
  templateUrl: './card-departamento.component.html',
  styleUrls: ['./card-departamento.component.css']
})
export class CardDepartamentoComponent implements OnInit {

  @Input() departamento : any ={};
  @Output() quieroHermano : EventEmitter<any> =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  dameHermano() {
    this.quieroHermano.emit({
      id: 11,
      nombre : 'Juancito',
      descripcion : 'Feo'
    })
  }

}
