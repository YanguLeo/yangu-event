import { Interface } from "readline";

export class DeviseInterface {
  id: Number;
  nom: String ;
}

export class Devise extends DeviseInterface {
  constructor(data) {
    super()
    this.id = data.id
    this.nom = data.nom
  }
}