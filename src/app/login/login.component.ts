import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router'; //Redirigir a otras vistas


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor (private router: Router){}

  entraUsuario(){
    this.router.navigate(['/inicio']); //Mueve a la página que indica el router
    console.log("Entra");
  }

}
