import { Interface } from "readline";

export class AdresseInterface {
  id: Number;
  nom: String ;
}

export class Adresse extends AdresseInterface {
  constructor(data) {
    super()
    this.id = data.id
    this.nom = data.nom
  }
}