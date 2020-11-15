import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  public reservations = [
    {
      id: 1,
      dateDebut: "2020-05-15",
      dateFin: "2020-08-12",
      prix: 100,
      devise: "$",
      reservationTypeId: 1,
      clientId: 1,
      salleId : 1
    },
    {
      id: 2,
      dateDebut: "2020-07-15",
      dateFin: "2020-08-10",
      prix: 500,
      devise: "$",
      reservationTypeId: 2,
      clientId: 2,
      salleId : 2
    }
]
  constructor() { }
}
