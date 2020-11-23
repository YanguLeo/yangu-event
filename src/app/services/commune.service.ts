import { Injectable } from '@angular/core';
import { Commune } from '../models/commune';
import communes from '../models/communes';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {
  public communes : Array<Commune> = communes


  constructor() { }

  public find(id : Number): Commune{
    return this.communes.find(x => x.id == id)
  } 
}
