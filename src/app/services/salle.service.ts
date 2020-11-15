import { Injectable } from '@angular/core';
import { Salle } from '../models/salle';
import salles from '../models/salles';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  public salles : Array<Salle> = salles

  constructor() { }

  public find(id : Number): Salle{
    return this.salles.find(x => x.id == id)
  } 
}
