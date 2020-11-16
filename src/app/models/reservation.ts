import { Adresse } from './adresse';
import { Commune } from './commune';
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
  communeId: Number;
  adresseId: Number;
  clientId: Number;
  salleId: Number;
  entrepriseId: Number;
  salle ?: Salle;
  client ?: Client;
  devise ?: Devise;
  entreprise?: String;
  commune ?: Commune;
  adresse ?: Adresse;
  
  }

export class Reservation extends ReservationInterface {
  constructor(data) {
    super()
    this.id = data.id
    this.dateDebut = data.dateDebut
    this.dateFin = data.dateFin
    this.prix = data.prix
    this.deviseId = data.deviseId
    this.communeId = data.communeId
    this.adresseId =  data.adresseId
    this.typeReservation = data.typeReservation
    this.clientId = data.clientId
    this.salleId = data.salleId
    this.entrepriseId = data.entrepriseId
  }
  getPriceUnit(){
    return this.prix  + " " + this.deviseId
  }
  getPriceTotal() {
    return this.prix + " " + this.deviseId
  }
}