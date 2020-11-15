import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Salle } from '../models/salle';
import salles from '../models/salles'

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  salles : Array<Salle> = salles
  public b_salles : BehaviorSubject<Array<Salle>> = new BehaviorSubject(salles)

  constructor() {

  }

  public find(id : Number): Salle{
    return this.salles.find(x => x.id == id)
  } 
  
}
