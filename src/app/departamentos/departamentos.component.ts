import { Component, OnInit } from '@angular/core';
import { datos} from './departamentos';
@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  departamentos : Array<any> = datos;

  constructor() { }

  ngOnInit() {
  }

  addDepa(){
    this.departamentos.push({
      id: 10,
      nombre : 'Litoral',
      descripcion : 'Mar para Bolivia'
    }) 
  }

  quieroHermano(hermano:any) {
    this.departamentos.push(hermano);
  }

}
