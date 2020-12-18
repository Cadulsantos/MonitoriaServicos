import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Loading } from '../shared/class/loading';
import { logErroServico } from '../shared/Model/logErroServico';
import { servico } from '../shared/Model/servico';
import { LogErroServicoService } from '../shared/services/log-erro-servico.service';

@Component({
  selector: 'app-log-erro-servico',
  templateUrl: './log-erro-servico.component.html',
  styleUrls: ['./log-erro-servico.component.scss']
})
export class LogErroServicoComponent implements OnInit {
  modalRef: BsModalRef;
  servico: servico;
  logsErro: logErroServico[] = [];
  logErroServico: logErroServico;
  reload: boolean;

  constructor(
    public bsModalRef: BsModalRef,
    private router: ActivatedRoute,
    private modalService: BsModalService,

    private logErroService: LogErroServicoService
  ) {}

  ngOnInit() {
    // this.idServico =  this.router.snapshot.paramMap.get('idServico');
    // this.origem = this.router.snapshot.paramMap.get('origem');

    this.getLogErroServico(this.servico.id, this.servico.origem);
  }

  getLogErroServico(idServico: string, origem: string) {
    Loading.show();
    this.logErroService
      .getLogsErroServico(idServico, origem)
      .subscribe(logs => {
        this.logsErro = logs;
      });
    Loading.hide();
  }

  // resolverLog(logErroServico : logErroServico)
  // {
  // var log = this.logErroService.atualizaStatusLog(logErroServico);
  //   //  console.log(log);
  // }

  resolverLog() {
    Loading.show();
    this.logErroService
      .atualizaStatusLog(this.logErroServico)
      .subscribe((has: Boolean) => {
        if (has) {
          this.reload = true;
          // this.bsModalRef.hide();
          this.getLogErroServico(this.servico.id, this.servico.origem);
        } else this.reload = false;
      });
    Loading.hide();
    this.modalRef.hide();
  }

  openConfirmResolv(
    template: TemplateRef<any>,
    logErroServico: logErroServico
  ) {
    // this.modalService.onHidden.pipe(take(1)).subscribe((res : any) =>{
    // this.reload = this.modalRef.content.reload;
    // this.bsModalRef.hide();
    // });

    this.modalRef = this.modalService.show(template);
    this.logErroServico = logErroServico;
  }
}