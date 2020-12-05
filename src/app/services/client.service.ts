import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients : Array<Client> = []
  constructor(private storage: Storage) {
    this.storage.get('clients').then(res => {
      if (res) {
        this.clients = JSON.parse(res)
      }
    })
  }

  register(data) : Promise<any> {
    return new Promise(
      (resolve) => {
        if (this.clients.findIndex(x => x.email == data.email) == -1) {
          data.id = this.clients.length 
          let client: Client = new Client(data)
          this.clients.push(client)
          this.preserveClients()
          resolve({state: true})
        } else {
          resolve({state : false , msg : "Email déjà utilisé"})
        }
      }
    )
  }

  preserveClients() {
    this.storage.set('clients', JSON.stringify(this.clients))
  }

  existByLogin(email, password) : Client {
    return this.clients.find(x => x.email == email && x.password == password)
  }
}
