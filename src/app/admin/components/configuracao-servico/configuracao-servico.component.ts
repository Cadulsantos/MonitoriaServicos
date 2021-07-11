import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { servico } from '../../../shared/Model/servico';
import { ServicosService } from '../../services/servicos.service';

@Component({
  selector: 'app-configuracao-servico',
  templateUrl: './configuracao-servico.component.html',
  styleUrls: ['./configuracao-servico.component.scss']
})
export class ConfiguracaoServicoComponent implements OnInit {

  modalRef: BsModalRef;
  formServico: FormGroup;
  servico: servico;
  reload: Boolean;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private servicoService: ServicosService
  ) {}

  ngOnInit() {
    this.criaFormServico();
  }

  criaFormServico() {
    this.formServico = this.fb.group({
      nomeServico: this.servico.nomeArgument,
      statusServico: this.servico.ativo,
      periodicidade: this.servico.periodicidade,
      descricao: this.servico.descricao
    });
  }

  SalvaAlteracoes() {
    this.servico.nomeArgument = this.formServico.value.nomeServico;
    this.servico.ativo = this.formServico.value.statusServico;
    this.servico.periodicidade = this.formServico.value.periodicidade;
    this.servico.descricao = this.formServico.value.descricao;

    this.servicoService
      .alterarServico(this.servico)
      .subscribe((has: Boolean) => {
        if (has) {
          this.reload = true;
          this.bsModalRef.hide();
        } else this.reload = false;
      });
    this.modalRef.hide();
  }

  openConfirmAlter(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
