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
import {map, startWith} from 'rxjs/operators';

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
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
//chiplist

@ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private servicoService: ServicosService
  ) {}

  ngOnInit() {
    this.criaFormServico();

    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  criaFormServico() {
    this.formServico = this.fb.group({
      nomeServico: this.servico.nomeArgument,
      statusServico: this.servico.ativo,
      periodicidade: this.servico.periodicidade,
      descricao: this.servico.descricao
      // tags: this.servico.tags
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
    this.fruits.push(value);
  }

  // Clear the input value
  // event.chipInput!.clear();
  event.input = null;

  this.fruitCtrl.setValue(null);
}

remove(fruit: string): void {
  const index = this.fruits.indexOf(fruit);

  if (index >= 0) {
    this.fruits.splice(index, 1);
  }
}

selected(event: MatAutocompleteSelectedEvent): void {
  this.fruits.push(event.option.viewValue);
  this.fruitInput.nativeElement.value = '';
  this.fruitCtrl.setValue(null);
}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
}

}
