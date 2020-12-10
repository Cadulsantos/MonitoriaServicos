import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  abreFiltro: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

abreFiltroOnClick(){
  this.abreFiltro = !this.abreFiltro;
  console.log(this.abreFiltro);
}

}
