import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../providers/api';

import { servico } from '../Model/servico';

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

}
