import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Loading } from '../shared/class/loading';
import { servico } from '../shared/Model/servico';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  abreFiltro: boolean = false;
  servicos: servico[] = [];
  servicosShare: servico[] = [];

  filtroServico: FormGroup;
  subs = new Array<Subscription>();

  constructor() { }

  ngOnInit(): void {
  }

  getServicos() {
    Loading.show();
  }

  servicosRodando(){
    Loading.show();
  }

  abreFiltroOnClick(){
    this.abreFiltro = !this.abreFiltro;
    console.log(this.abreFiltro);
  }


  logsErroServicoOnClick(servico: servico) {

  }

  logsExecucaoServicoOnClick(servico: servico) {

  }

  editaServicoOnClick(servico: servico) {

  }

}
