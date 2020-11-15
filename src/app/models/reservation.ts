import { Client } from './Client';
import { Devise } from './devise';
import { Salle } from './salle';

export class ReservationInterface {
  id: Number;
  dateDebut: String ; 
  dateFin: String;
  prix: String; 
  deviseId: Number;
  typeReservation: String;
  clientId: Number;
  salleId: Number;
  salle ?: Salle;
  client ?: Client;
  devise ?: Devise;
}

export class Reservation extends ReservationInterface {
  constructor(data) {
    super()
    this.id = data.id
    this.dateDebut = data.dateDebut
    this.dateFin = data.dateFin
    this.prix = data.prix
    this.deviseId = data.deviseId
    this.typeReservation = data.typeReservation
    this.clientId = data.clientId
    this.salleId = data.salleId
  }
  getPriceUnit(){
    return this.prix + " " + this.deviseId
  }
  getPriceTotal() {
    return this.prix + " " + this.deviseId
  }
}