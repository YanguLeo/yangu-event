import { Injectable } from '@angular/core';
import { Salle } from './salle';
import salles from './salles'

@Injectable({
  providedIn: 'root'
})
export class SallesService {

  salles : Array<Salle> = salles

  constructor() {

  }

}
