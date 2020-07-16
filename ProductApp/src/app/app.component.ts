import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Management';
  constructor(public _auth:AuthService, private _route:Router){

  }
  logoutUser()
  {
    localStorage.removeItem('token');
    this._route.navigate(['/products'])
  }
}
