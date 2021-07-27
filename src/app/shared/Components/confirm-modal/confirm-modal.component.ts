import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conform-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {


  @Input() title: string;
  @Input() msg: string;
  @Input() cancelTxt: 'Cancelar';
  @Input() okTxt: 'Sim';

  confirmResult: Subject<boolean>;

  constructor(public bsModalRef : BsModalRef) { }

  ngOnInit() {
    this.confirmResult = new Subject();
  }

  onClose() {
    this.confirmAndClose(false);
  }

  onConfirm() {
    this.confirmAndClose(true);
  }

 private confirmAndClose(value: boolean){
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }

}
