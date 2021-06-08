import { logErroServico } from './../model/logErroServico';
import { ApiProvider } from './../providers/api';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LogErroServicoService {
  private _CONTROLLER = "LogErro";
  logErrosServico : logErroServico;

  constructor(public http: HttpClient, private api: ApiProvider) { }

  getQtdErroGroup( idServico: string)
  {
    return this.http.get<number>(
      this.api.request(this._CONTROLLER, "GetQtdErroGroup",  `?idServico=${idServico}`))

  }

  getLogsErroServicoPag( idServico: string, pagina : number )
  {
    return this.http.get<logErroServico[]>(
      this.api.request(this._CONTROLLER, "GetLogErrosServicoPag",  `?idServico=${idServico}&pagina=${pagina}`))

  }

  getCountErrosGroup(idServico: string ){
      return this.http.get<number>(
        this.api.request(this._CONTROLLER, "GetQtdErroGroup",  `?idServico=${idServico}`))
  }

  solucionarErroServico(idServico: string){
    return this.http.get(this.api.request(this._CONTROLLER, "GetSolucionarErrosServico", idServico));
  }

  atualizaStatusLog(logErro : any)
  {
    return this.http.post(this.api.request(this._CONTROLLER, "AtualizaStatusLog"), logErro).pipe(take(1));
  }

}
