import { usuario } from './../shared/Model/usuario';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../shared/services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: usuario;
  retorno : any;

  loginForms = this.fb.group({
    login: ["", Validators.required],
    senha: ["", Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private route: Router) { }


  ngOnInit(): void {
  }

  onAutenticacaoLogin(){

    this.route.navigate(['/home']);
    if(this.loginForms.invalid)
    {
      Swal.fire('Campo de Login ou senha inválidos!')
    }


   this.usuarioService.autenticacaoUsuario({...this.loginForms.value}).subscribe(
     usua => {
      this.usuario = usua;
      localStorage.setItem('Token', this.usuario.login);
      this.route.navigate(['/home']);
     }
   );

  }


}
