import { Interface } from "readline";

export class ReservationInterface {
  id: Number;
  dateDebut: String ; 
  dateFin: String;
  prix: String; 
  deviseId: Number;
  reservationTypeId: String;
  clientId: Number;
  salleId: Number;
}

export class Reservation extends ReservationInterface {
  constructor(data) {
    super()
    this.id = data.id
    this.dateDebut = data.dateDebut
    this.dateFin = data.datFin
    this.prix = data.prix
    this.deviseId = data.deviseId
    this.reservationTypeId = data.reservationTypeId
    this.clientId = data.clientId
    this.salleId = data.salleId
  }
  getReservatio(){
    return this.dateDebut + " " + this.dateFin + " " + this.prix
  }
}