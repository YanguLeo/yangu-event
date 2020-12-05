import { ClientService } from './client.service';
import { Client } from './../models/client';
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  authentificationState = new Subject()
  currentClient: Client = null
  authenticated = null

  constructor(private storage: Storage,
    private platform: Platform,
    private clientService : ClientService) { 
    this.platform.ready().then(() => {
      this.checkToken();
    });
  }

  login(email, password) {
    const client = this.clientService.existByLogin(email, password)
    if (client) {
      this.storage.set(TOKEN_KEY, true)
      this.storage.set('currentClient', JSON.stringify(client))
      this.currentClient = client
      this.changeState(true)
    } else {
      return false
    }
  }

  changeState(state : boolean) {
    this.authenticated = state 
    this.authentificationState.next(state);    
  }
  logout(){
    this.storage.set(TOKEN_KEY, false).then(() => {
      this.changeState(false)
    })
  }

  isAuthentificated(){
    return this.authenticated
  }

  checkToken(): Promise<any> {
    return new Promise((resolve) => {
      this.storage.get(TOKEN_KEY).then(res => {
        if (res) {
          this.storage.get('currentClient').then(client => { 
            this.currentClient = new Client(JSON.parse(client))
            this.changeState(true)
            resolve(true)
          })
        } else {
          this.changeState(false)
          resolve(false)
        }
      })
    })
  }
}
