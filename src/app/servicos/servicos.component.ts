import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

import { Loading } from '../shared/class/loading';
import { servico } from '../shared/Model/servico';
import { UtilProvider } from '../shared/providers/util';
import { ServicosService } from '../shared/services/servicos.service';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit{

  abreFiltro: boolean = false;
  servicos: servico[] = [];
  servicosShare: servico[] = [];

  filtroServico: FormGroup;
  subs = new Array<Subscription>();

  constructor(
    private util: UtilProvider,
    private fb: FormBuilder,
    // private modalService: BsModalService,
    private servicoService: ServicosService
  ) { }

  ngOnInit(): void {
    this.getServicos();
    this.criarFiltroServicos();
    const sub =  this.util.emiterEvent.subscribe(has => {
      if (has) this.getServicos();
    });

    this.subs.push(sub);
  }

  getServicos() {
    Loading.show();
    this.servicoService.getServicos().subscribe(
      servicos => {
        console.log(servicos);
        this.servicos = servicos;
        this.servicosShare = servicos.filter(x => x.ativo == true);
        Loading.hide();
      },
      erro => Loading.hide()
    );
  }

  servicosRodando(){
    Loading.show();
  }

  criarFiltroServicos() {
    this.filtroServico = this.fb.group({
      nomeArgument: [""],
      statusServico: ["ativo"],
      erro: [""]
    });

    const sub = this.filtroServico.valueChanges.subscribe(servicos =>
      this.filtra(servicos)
    );

    this.subs.push(sub);
  }

  filtra(obj: any) {
    const dadosFiltro = obj;

    // console.log(dadosFiltro.nomeArgument);

    this.servicosShare = this.servicos;

    if (dadosFiltro.nomeArgument != "")
      this.servicosShare = this.servicosShare.filter((x: servico) =>
        x.nomeArgument.includes(dadosFiltro.nomeArgument)
      );

    if (dadosFiltro.statusServico == "ativo")
      this.servicosShare = this.servicosShare.filter(
        (x: servico) => x.ativo == true
      );
    else if (dadosFiltro.statusServico == "inativo")
      this.servicosShare = this.servicosShare.filter(
        (x: servico) => x.ativo == false
      );

    if (dadosFiltro.erro == "sim")
      this.servicosShare = this.servicosShare.filter(
        (x: servico) => x.quantidadeErros != "0"
      );
    else if (dadosFiltro.erro == "nao")
      this.servicosShare = this.servicosShare.filter(
        (x: servico) => x.quantidadeErros == "0"
      );
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
