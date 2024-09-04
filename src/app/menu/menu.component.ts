import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BuscarComponent } from '../buscar/buscar.component';
import { ResultadosComponent } from '../resultados/resultados.component';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, BuscarComponent, ResultadosComponent],
  templateUrl: './menu.component.html',   
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnDestroy {

  prueba = 1; //Cambiar valores con servicio

  mobileQuery: MediaQueryList;
    
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
