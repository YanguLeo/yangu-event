import { Client } from './../services/Client';
import { Salle } from 'src/app/services/salle';
import { Interface } from "readline";
import { Devise } from './devise';

export class ReservationInterface {
  id: Number;
  dateDebut: String ; 
  dateFin: String;
  prix: String; 
  deviseId: Number;
  reservationTypeId: String;
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
    this.reservationTypeId = data.reservationTypeId
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