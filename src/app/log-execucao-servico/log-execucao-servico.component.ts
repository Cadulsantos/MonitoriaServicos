import { Component, OnInit } from '@angular/core';
import { LogExecucaoServicoService } from '../shared/services/log-execucao-servico.service';
import { logExecucaoServico } from '../shared/model/logExecucaoServico';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { servico } from '../shared/model/servico';
import { Loading } from '../shared/class/loading';

@Component({
  selector: 'app-log-execucao-servico',
  templateUrl: './log-execucao-servico.component.html',
  styleUrls: ['./log-execucao-servico.component.scss']
})
export class LogExecucaoServicoComponent implements OnInit {
  modalRef: BsModalRef;
  servico : servico;

  logsExecucao : logExecucaoServico[] = [];
  constructor(
    public bsModalRef: BsModalRef,
    private logExecucaoService : LogExecucaoServicoService) { }

  ngOnInit() {
    // this.idServico =  this.router.snapshot.paramMap.get('idServico');
    this.getLogExecucaoServico(this.servico.id);
  }


 getLogExecucaoServico(idServico : string)
 {
  Loading.show();
   this.logExecucaoService.getLogsExecucao(idServico).subscribe(logsExecucao => {this.logsExecucao = logsExecucao});
   Loading.hide();
 }

}
