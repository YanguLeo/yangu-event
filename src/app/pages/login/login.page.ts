
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  dataUser = {
    email: '',
    password : ''
  }
  constructor() { }

  login() {
    console.log('Email :' + this.dataUser.email);    
    console.log('Password :' + this.dataUser.password);
  }
}
