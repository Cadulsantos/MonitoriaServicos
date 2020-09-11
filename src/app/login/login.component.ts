import { usuario } from './../shared/Model/usuario';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../shared/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: usuario;

  loginForms = this.fb.group({
    login: ["", Validators.required],
    senha: ["", Validators.required]
  });

  constructor(private fb: FormBuilder,private usuarioService: UsuarioService) { }


  ngOnInit(): void {
  }

  onAutenticacaoLogin(){
    // this.validarCampoLogin(this.usuario);
    if(this.loginForms.invalid)
    {
      Swal.fire('Campo de Login ou senha inválidos!')
    }

    this.usuarioService.autenticacaoUsuario({...this.loginForms.value})
  }

  // validarCampoLogin( usuario: usuario)
  // {

  // }

}
