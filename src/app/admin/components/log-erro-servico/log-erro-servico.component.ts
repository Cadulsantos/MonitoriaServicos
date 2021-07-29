import { EMPTY, Subject } from 'rxjs';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Loading } from '../../../shared/class/loading';
import { logErroServico } from '../../../shared/Model/logErroServico';
import { servico } from '../../../shared/Model/servico';
import { LogErroServicoService } from '../../services/log-erro-servico.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { switchMap, take } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/service/alert-modal.service';

@Component({
  selector: 'app-log-erro-servico',
  templateUrl: './log-erro-servico.component.html',
  styleUrls: ['./log-erro-servico.component.scss']
})
export class LogErroServicoComponent implements OnInit {

  servico: servico;
  logsErro: logErroServico[] = [];
  logErroServico: logErroServico;

  reload: Subject<boolean>;

  //paginação
  pageSize : number;
  page: number;
  collectionSize : number;
  showPag = false;

  constructor(
    public bsModalRef: BsModalRef,
    // private router: ActivatedRoute,
    private alertService : AlertModalService,
    private logErroService: LogErroServicoService
  ) {}

  ngOnInit() {
    // this.idServico =  this.router.snapshot.paramMap.get('idServico');
    // this.origem = this.router.snapshot.paramMap.get('origem');
    this.reload = new Subject();
    this.pageSize = 10;
    this.page = 1;

    this.getLogErroServico();

  }

  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
    console.log("Pagina "+`${this.page}`)
    this.getLogErroServico();
  }

//novo
  getLogErroServico() {
    Loading.show();

    this.logErroService.getQtdErroGroup(this.servico.id)
    .subscribe(value => {
      this.collectionSize = value;

      if( this.collectionSize === 0){
        this.onClose();
      }
      else if(this.collectionSize < this.pageSize){
        this.showPag = true
      }

      if(this.collectionSize > 0){
        this.logErroService.getLogsErroServicoPag(this.servico.id, this.page)
        .subscribe(logs => {
          this.logsErro = logs;
        });
      }
  });
  Loading.hide();
}

  confirmResolvAllLogs(logErroServico: logErroServico){
    const result$ = this.alertService.showConfirm('Confirmação', 'Deseja solucionar todos os erros?', 'Sim' , 'Não');
    result$.asObservable()
    .pipe(
      take(1),
      // switchMap()
    )
    .subscribe(
      result =>
        result ? this.solucionarTodosErros(logErroServico) : EMPTY
      // success => {
      //   this.onRefresh()
      // },
      // error => {
      //   this.alertService.showAlertDanger('Erro ao Remover curso. Tente novamente mais tarde.')
      // }
    );
  }


  confirmResolvLog(logErroServico: logErroServico){
    const result$ = this.alertService.showConfirm('Confirmação', 'Deseja solucionar este erro?', 'Sim' , 'Não');
    result$.asObservable()
    .pipe(
      take(1),
      // switchMap()
    )
    .subscribe(
      result =>
        result ? this.solucionarErro(logErroServico) : EMPTY
      // success => {
      //   this.onRefresh()
      // },
      // error => {
      //   this.alertService.showAlertDanger('Erro ao Remover curso. Tente novamente mais tarde.')
      // }
    );
  }

  solucionarErro(logErroServico: logErroServico) {
    Loading.show();
    this.logErroService
      .atualizaStatusLog(logErroServico)
      .subscribe(
        success => {
          this.getLogErroServico();
          },
          error => {
            console.log(console.error);
          }

      );
     Loading.hide();
    // this.modalRef.hide();
  }


  solucionarTodosErros(logErroServico: logErroServico){
    Loading.show();
    this.logErroService.solucionarErroServico(logErroServico.servicoId)
    .subscribe(success => {
      this.onConfirm();
      },
      error => {
        console.log(console.error);
      });
  }

  onClose() {
    this.confirmAndClose(false);
  }

  onConfirm() {
    this.confirmAndClose(true);
  }

  private confirmAndClose(value: boolean){
    console.log(value);
    this.reload.next(value);
    this.bsModalRef.hide();
  }

}
