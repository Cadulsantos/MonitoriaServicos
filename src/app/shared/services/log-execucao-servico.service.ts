import { Injectable } from '@angular/core';
import { ApiProvider } from '../providers/api';
import { HttpClient } from '@angular/common/http';
import { logExecucaoServico } from '../model/logExecucaoServico';

@Injectable({
  providedIn: 'root'
})
export class LogExecucaoServicoService {
  private _CONTROLLER = "LogExecucao";
  logsExecucao : logExecucaoServico[];

    constructor(public http: HttpClient, private api: ApiProvider) { }

    getLogsExecucao(idServico : string, pagina: number)
    {
      return this.http.get<logExecucaoServico[]>(
        this.api.request(this._CONTROLLER, "GetLogsExecucaoServico", `?idServico=${idServico}&pagina=${pagina}`))
    }
}
