import { AuthentificationService } from './../../services/authentification.service';

import { Component, } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email = ''
  password = ''
  
  constructor(private authentificationService: AuthentificationService,
    private toastController : ToastController) { }

  login() {
    const auth = this.authentificationService.login(this.email, this.password)
    if (!auth) {
      this.presentToast('Identifiants incorrectes') 
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
