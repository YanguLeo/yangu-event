import { Injectable } from '@angular/core';
import { Adresse } from '../models/adresse';
import adresses from '../models/adresses';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {
  public adresses : Array<Adresse> = adresses


  constructor() { }

  public find(id : Number): Adresse{
    return this.adresses.find(x => x.id == id)
  } 
}
