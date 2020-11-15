import { Interface } from "readline";

export class ClientInterface {
  id: Number;
  nom: String ; 
  postnom: String;
  prenom: String; 
  adresse: String;
  telephone: String;
  email: String;
  password: String;
}

export class Client extends ClientInterface {
  constructor(data) {
    super()
    this.id = data.id
    this.nom = data.nom
    this.postnom = data.postnom
    this.prenom = data.prenom
    this.adresse = data.adresse
    this.telephone = data.telephone
    this.email = data.email
    this.password = data.password
  }
  getName (){
    return this.nom + " " + this.postnom + " " + this.prenom
  }
}