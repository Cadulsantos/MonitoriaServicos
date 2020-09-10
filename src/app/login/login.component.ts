import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string = "";
  senha: string = "";

  usuario: any;

  constructor() { }

  ngOnInit(): void {
  }

  onAutenticacaoLogin(){
    this.usuario = this.validarCampoLogin(this.login, this.senha);

    console.log("Login: " + this.login);
    console.log("Senha: " + this.senha);

  }

  validarCampoLogin( login: string, senha: string)
  {
    if(login == null || login == "")
    {

    }

    if(senha == null || senha == "")
    {

    }

  }

}
