import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

authentificationState = new BehaviorSubject(false)
  constructor(private storage: Storage,
    private platform: Platform) { 
    this.platform.ready().then(() => {
      this.checkToken();
    });
  }

  login(){
    return this.storage.set(TOKEN_KEY, 'Jessie 781227').then(res => {
      this.authentificationState.next(true);
  })
  }

  logout(){
    return this.storage.set(TOKEN_KEY).then(() => {
      this.authentificationState.next(false);
  })
  }

  isAuthentificated(){
    return this.authentificationState.value;

  }

  checkToken(){
    return this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authentificationState.next(true);
      }
  })
  }
}
