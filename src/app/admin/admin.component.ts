import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  title = 'MonitoriaServicosFront';

  mostrarMenu : boolean = false;

constructor( private authService : AuthService){
  console.log("admin");
}

ngOnInit() {

  this.authService.mostrarMenuEmitter.subscribe(
    mostrar => {
      this.mostrarMenu = mostrar;
      // console.log(mostrar);
    }
  );

}

}
