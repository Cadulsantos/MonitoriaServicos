import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Subscription } from "rxjs";
import { delay, take } from 'rxjs/operators';
import { ConfiguracaoServicoComponent } from '../../components/configuracao-servico/configuracao-servico.component';
import { LogErroServicoComponent } from '../../components/log-erro-servico/log-erro-servico.component';
import { LogExecucaoServicoComponent } from '../../components/log-execucao-servico/log-execucao-servico.component';

import { Loading } from "../../../shared/class/loading";
import { servico } from "../../../shared/Model/servico";
import { UtilProvider } from "../../providers/util";
import { ServicosService } from "../../services/servicos.service";

@Component({
  selector: "app-servicos",
  templateUrl: "./servicos.component.html",
  styleUrls: ["./servicos.component.scss"],
})
export class ServicosComponent implements OnInit {
  public modalRef: BsModalRef;
  abreFiltro: boolean = false;
  servicos: servico[] = [];
  servicosShare: servico[] = [];

  filtroServico: FormGroup;
  subs = new Array<Subscription>();

  tagList  =  [
    "Faturamento",
    "Andamentos",
    "Envio de e-mail",
    "Projeto Recovery",
    "Fluxo de Publicacao",

    // "Faturamento",
    // "Andamentos",
    // "Envio de e-mail",
    // "Projeto Recovery",

    // "Faturamento",
    // "Andamentos",
    // "Envio de e-mail",
    // "Projeto Recovery",
  ];

  constructor(
    private util: UtilProvider,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private servicoService: ServicosService
  ) {}

  ngOnInit(): void {
    // this.getServicos();
    this.criarFiltroServicos();
    // const sub = this.util.emiterEvent.subscribe((has) => {
    //   if (has) this.getServicos();
    // });

    // this.subs.push(sub);
  }

  getServicos() {
    Loading.show();
    this.servicoService.getServicos().subscribe(
      (servicos) => {
        // console.log(servicos);
        this.servicos = servicos;
        this.servicosShare = servicos.filter((x) => x.ativo == true);
        Loading.hide();
      },
      (erro) => Loading.hide()
    );
  }

  servicosRodando() {
    Loading.show();
    // this.servicosShare = this.servicos;
    this.servicosShare = this.servicosShare.filter(
      (x: servico) => x.dataFim == "" && x.ativo == true
    );
    console.log(this.servicosShare);
    Loading.hide();
  }

  criarFiltroServicos() {
    this.filtroServico = this.fb.group({
      nomeArgument: [""],
      statusServico: ["ativo"],
      erro: [""],
    });

    // const sub = this.filtroServico.valueChanges.subscribe(servicos =>
    //   // console.log(servicos),
    //   this.filtra(servicos)
    // );

    // this.subs.push(sub);
  }

  filtra() {
    Loading.show();
    const dadosFiltro = this.filtroServico.value;
    let filtroServico: any = {};

    // this.servicosShare = servicos.filter(x => x.ativo == true);

    console.log(dadosFiltro);

    filtroServico.nomeArgument = dadosFiltro.nomeArgument

    if (dadosFiltro.statusServico == "ativo")
      filtroServico.ativo = true;
    else if (dadosFiltro.statusServico == "inativo")
      filtroServico.ativo = false;

    if (dadosFiltro.erro == "sim")
    filtroServico.erro = true;
    else if (dadosFiltro.erro == "nao")
      filtroServico.erro = false;

    // console.log(filtroServico);

    this.servicoService.getServicosFiltro(filtroServico).subscribe(
      (servicos) => {

      // this.servicos = servicos;
        this.servicosShare = servicos;
        delay(1500);

        Loading.hide();
      },
      (erro) => Loading.hide()
    );

  }

  //////// FILTRO 31/03/2021 ////////
  // filtra() {
  //   const dadosFiltro = this.filtroServico.value;

  //   Loading.show();
  //   this.servicoService.getServicos().subscribe(
  //     (servicos) => {
  //       // console.log(servicos);
  //       this.servicos = servicos;
  //       // this.servicosShare = servicos.filter(x => x.ativo == true);

  //       if (dadosFiltro.nomeArgument != "")
  //         this.servicosShare = this.servicos.filter(
  //           (x: servico) => x.nomeArgument.toLowerCase().includes(dadosFiltro.nomeArgument.toLowerCase()),
  //           console.log(dadosFiltro.nomeArgument)
  //         );

  //       if (dadosFiltro.statusServico == "ativo")
  //         this.servicosShare = this.servicos.filter(
  //           (x: servico) => x.ativo == true
  //         );
  //       else if (dadosFiltro.statusServico == "inativo")
  //         this.servicosShare = this.servicos.filter(
  //           (x: servico) => x.ativo == false
  //         );

  //       if (dadosFiltro.erro == "sim")
  //         this.servicosShare = this.servicos.filter(
  //           (x: servico) => x.quantidadeErros != "0"
  //         );
  //       else if (dadosFiltro.erro == "nao")
  //         this.servicosShare = this.servicos.filter(
  //           (x: servico) => x.quantidadeErros == "0"
  //         );

  //       Loading.hide();
  //     },
  //     (erro) => Loading.hide()
  //   );

  //   // console.log( this.servicosShare);
  //   // this.servicosShare = this.servicos;
  // }

  abreFiltroOnClick() {
    this.abreFiltro = !this.abreFiltro;
    console.log(this.abreFiltro);
  }

  logsErroServicoOnClick(servico: servico) {

    this.modalService.onHidden.pipe(take(1)).subscribe((res: any) => {
      this.filtra();
    });

    this.modalRef = this.modalService.show(LogErroServicoComponent, {
      animated: true,
      backdrop: true,
      ignoreBackdropClick: true,
      class: "modal-dialog-centered modal-lg",
      initialState: {
        servico: servico
      }
    });
  }

  logsExecucaoServicoOnClick(servico: servico) {

    this.modalService.onHidden.pipe(take(1)).subscribe((res: any) => {});

    this.modalRef = this.modalService.show(LogExecucaoServicoComponent, {
      animated: true,
      backdrop: true,
      ignoreBackdropClick: true,
      keyboard: true,
      class: "modal-dialog-centered modal-lg",
      initialState: {
        servico: servico
      }
    });
  }

  configuracoesOnClick(servico: servico) {
    this.modalService.onHidden.pipe(take(1)).subscribe((res: any) => {
      this.filtra();
    });

    this.modalRef = this.modalService.show(ConfiguracaoServicoComponent, {
      animated: true,
      backdrop: true,
      ignoreBackdropClick: true,
      class: "modal-dialog-centered .modal-alteraSevico",
      initialState: {
        servico: servico
      }
    });

  }
}
