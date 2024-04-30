import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms'; //Permite usar fromGroup

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
