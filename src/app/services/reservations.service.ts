import { Reservation } from '../models/reservation';
import { Injectable } from '@angular/core';
import reservations from '../models/reservations';
import { DeviseService } from './devise.service';
import { BehaviorSubject } from 'rxjs';
import { SalleService } from './salle.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  public reservations: Array<Reservation> = reservations
  public b_reservations : BehaviorSubject<Array<Reservation>> = new BehaviorSubject([])
  
  constructor(private deviseService : DeviseService, private salleService : SalleService) { 
    this.reservations = this.reservations.map((x : Reservation) => {
      x.devise = this.deviseService.find(x.deviseId)
      x.salle = this.salleService.find(x.salleId)
      return x
    })
    this.b_reservations.next(this.reservations)
  }
}
