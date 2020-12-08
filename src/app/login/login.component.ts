import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../shared/services/auth.service';
import { UsuarioService } from '../shared/services/usuario.service';
import { usuario } from './../shared/Model/usuario';

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
    private authService: AuthService,
    private route: Router) { }


  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.emit(false);
  }

  onAutenticacaoLogin(){

    // this.route.navigate(['/home']);
    if(this.loginForms.invalid)
    {
      Swal.fire('Campo de Login ou senha inválidos!');
    }

   this.authService.autenticacao({...this.loginForms.value}).subscribe(
     (usua : any) => {
       console.log(usua);
      // this.usuario = usua;
      localStorage.setItem('Token', JSON.stringify({ login : usua.login, data : new Date()}));
      this.authService.mostrarMenuEmitter.emit(true);
      this.route.navigate(['/home']);
     },(error) => {
        Swal.fire(error.error);
     }
   );

  }


}
