import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../providers/api';

import { servico } from '../../shared/Model/servico';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  private _CONTROLLER = "Servico";
  constructor(public http: HttpClient, private api: ApiProvider) { }


  getServicos(){
    return this.http.get<servico[]>(
      this.api.request(this._CONTROLLER, "GetServicos"));
  }

  getServicosFiltro(servico : any){
    return this.http.post<servico[]>(this.api.request(this._CONTROLLER, "GetServicosFiltro"), servico);
  }

  alterarServico(servico : servico){
    // console.log(servico);
    return this.http.post(this.api.request(this._CONTROLLER, "AtualizaServico"), servico).pipe(take(1));
  }

}
