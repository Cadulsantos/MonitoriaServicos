import { Component, OnInit } from '@angular/core';
import { LogExecucaoServicoService } from '../../services/log-execucao-servico.service';
import { logExecucaoServico } from '../../../shared/model/logExecucaoServico';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { servico } from '../../../shared/model/servico';
import { Loading } from '../../../shared/class/loading';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-log-execucao-servico',
  templateUrl: './log-execucao-servico.component.html',
  styleUrls: ['./log-execucao-servico.component.scss']
})
export class LogExecucaoServicoComponent implements OnInit {
  modalRef: BsModalRef;
  servico : servico;
  logsExecucao : logExecucaoServico[] = [];

    //paginação
    pageSize : number;
    page: number;
    collectionSize : number;
    showPag = false;

  constructor(
    public bsModalRef: BsModalRef,
    private logExecucaoService : LogExecucaoServicoService) { }

  ngOnInit() {
    // this.idServico =  this.router.snapshot.paramMap.get('idServico');
    this.pageSize = 10;
    this.page = 1;

    this.logExecucaoService.getQtdLogExec(this.servico.id)
    .subscribe(value =>{
      this.collectionSize = value
    });
    this.getLogExecucaoServico();
  }


  getLogExecucaoServico()
 {
  Loading.show();
   this.logExecucaoService.getLogsExecucao(this.servico.id, this.page)
   .subscribe(logsExecucao => {
     this.logsExecucao = logsExecucao
    });
  Loading.hide();
 }

 pageChanged(event: PageChangedEvent): void {
  this.page = event.page;
  console.log("Pagina "+`${this.page}`)
  this.getLogExecucaoServico();
}

}
