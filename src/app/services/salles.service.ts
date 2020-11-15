import { Injectable } from '@angular/core';
import { Salle } from '../models/salle';
import salles from '../models/salles'

@Injectable({
  providedIn: 'root'
})
export class SallesService {

  salles : Array<Salle> = salles

  constructor() {

  }

}
