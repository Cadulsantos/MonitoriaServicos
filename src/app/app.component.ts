import { AuthService } from './shared/services/auth-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'MonitoriaServicosFront';

  mostrarMenu : boolean = false;

constructor( private authService : AuthService){

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
