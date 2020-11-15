import { Reservation } from '../models/reservation';
import { Injectable } from '@angular/core';
import reservations from '../models/reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  public reservations : Array<Reservation> = reservations
  constructor() { }
}
