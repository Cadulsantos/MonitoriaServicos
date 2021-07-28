import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { servico } from '../../../shared/Model/servico';
import { ServicosService } from '../../services/servicos.service';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith, tap} from 'rxjs/operators';

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

//chiplist
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  tagsServico: string[];
  tagsDisponiveis: string[];
  todasAsTags: string[] ;
//chiplist

@ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private servicoService: ServicosService
  ) {
  }

  ngOnInit() {
    this.criaFormServico();

    // this.fruitCtrl.setValue(null);
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      // tap(console.log),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.tagsDisponiveis.slice()));
  }

  criaFormServico() {
    this.formServico = this.fb.group({
      nomeServico: this.servico.nomeArgument,
      statusServico: this.servico.ativo,
      periodicidade: this.servico.periodicidade,
      descricao: this.servico.descricao
      // tags: this.servico.tags
    });

    this.tagsServico = this.servico.tags;
    this.tagsDisponiveis = this.todasAsTags.filter(o => this.tagsServico.indexOf(o) < 0);
  }

  SalvaAlteracoes() {
    this.servico.nomeArgument = this.formServico.value.nomeServico;
    this.servico.ativo = this.formServico.value.statusServico;
    this.servico.periodicidade = this.formServico.value.periodicidade;
    this.servico.descricao = this.formServico.value.descricao;
    this.servico.tags = this.tagsServico;

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

  removeTag(tag: string){

    var index = this.servico.tags.indexOf(tag);

    if(index !== -1 )
      this.servico.tags.splice(index, 1)

      console.log(this.servico.tags);
  }


//chiplist

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tagsServico.push(value);
    }

    // Clear the input value
    console.log(event.input.value)
    event.input.value = "";
    console.log(event.input.value)

    this.fruitCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.tagsServico.indexOf(tag);

    if (index >= 0) {
      this.tagsServico.splice(index, 1);
    }

    let tagExist = this.tagsDisponiveis.filter((x) => x === tag).length > 0;

    if(!tagExist)
      this.tagsDisponiveis.push(tag);
  }

  selected(event: MatAutocompleteSelectedEvent): void {

    let tag = event.option.viewValue;

    let tagExist = this.tagsDisponiveis.filter((x) => x === tag).length > 0;
    if(tagExist)
    {
      var index = this.tagsDisponiveis.indexOf(tag);
      if(index !== -1 )
        this.tagsDisponiveis.splice(index, 1)
    }

    this.tagsServico.push(tag);
    this.tagInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {

    const filterValue = value.toLowerCase();
    return this.tagsDisponiveis.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

}
