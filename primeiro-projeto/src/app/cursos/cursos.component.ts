import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[] = ['Java', 'Angular', 'React']

  constructor() {
    this.nomePortal = 'http://loiane.training';
    var servico = new CursosComponent();
   }

  ngOnInit() {
  }

}
