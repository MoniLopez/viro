import { Component } from '@angular/core';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  
  selectedTomo!: string; //Guarda el valor que da radioBottom sobre el tomo
  cambioValorTomo(valor: string): void{
    this.selectedTomo = valor;
  }
}
