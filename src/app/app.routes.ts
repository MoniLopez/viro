import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    { path:'', redirectTo: '/login', pathMatch: 'full' }, //redirije al componente login
    { path: 'login', component: LoginComponent }, //Indica quién es login
    { path: 'inicio', component: MenuComponent}
];
