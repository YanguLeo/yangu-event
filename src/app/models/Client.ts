import { Interface } from "readline";

export class ClientInterface {
  id: Number;
  nom: String ; 
  postnom: String;
  prenom: String; 
  image: string;
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
    this.image =data.image
    this.adresse = data.adresse
    this.telephone = data.telephone
    this.email = data.email
    this.password = data.password
  }
  getImage(){
  return this.image
}
  
  getName (){
    return this.nom + " " + this.postnom
  }


}

