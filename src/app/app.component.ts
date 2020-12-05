import { Client } from './models/client';
import { Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  auth: Subscription;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthentificationService,
    private router : Router
  ) {
    this.initializeApp();
  }
  
  client: Client = null
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.auth = this.authService.authentificationState.subscribe(state => {
        if (state) {
          this.router.navigate(['tabs'])
          this.client = this.authService.currentClient
        }
        else this.router.navigate(['login'])
      })
      
      this.authService.checkToken()

    });
  }

  ngOnDestroy(): void {
    this.auth.unsubscribe()
  }

  logout() {
    this.authentificationService.logout()
  }
}
