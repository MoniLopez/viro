import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', //Etiqueta para importar este componente en otros
  standalone: true, //En conjunto a la línea siguiente ayuda a importar
  imports: [RouterOutlet], //Indicar todos los componentes y modulos que se quieren importar
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' //Contiene los estilos
})
export class AppComponent {
  title = 'viro';
}
