
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';
import { ConfirmModalComponent } from '../Components/confirm-modal/confirm-modal.component';


export enum AlertTypes{
  DANGER =  'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService : BsModalService) { }

//  private showAlert(mensagem : string, tipo: AlertTypes, dissmissTimout?: number){
//     const modalRef: BsModalRef = this.modalService.show(AlertModalComponent)
//     modalRef.content.tipo = tipo;
//     modalRef.content.message = mensagem;

//     if(dissmissTimout){
//       setTimeout(() => modalRef.hide(), dissmissTimout)
//     }
//   }


  // showAlertDanger(mensagem : string){
  //   this.showAlert(mensagem, AlertTypes.DANGER);
  // }

  // showAlertSuccess(mensagem : string){
  //   this.showAlert(mensagem, AlertTypes.SUCCESS, 3000);
  // }

  showConfirm(title: string, msg: string, okTxt?:string, calcelTxt?:string){
    const modalRef: BsModalRef = this.modalService.show(ConfirmModalComponent)
    modalRef.content.title = title;
    modalRef.content.msg = msg;

    if(okTxt){
      modalRef.content.okTxt = okTxt;
    }

    if(calcelTxt){
      modalRef.content.cancelTxt = calcelTxt;
    }

    return (<ConfirmModalComponent>modalRef.content).confirmResult;
  }
}
