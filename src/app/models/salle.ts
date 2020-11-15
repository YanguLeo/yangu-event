import { Interface } from "readline";

export class SalleInterface {
  id: Number;
  image: String ; 
  nom: String;
  commune: String; 
  prix: Number;
  devise: String;
}

export class Salle extends SalleInterface {
  constructor(data) {
    super()
    this.id = data.id
    this.image = data.image
    this.nom = data.nom
    this.commune = data.commune
    this.prix = data.prix
    this.devise = data.devise
  }
  getPrice (){
    return this.prix + " " + this.devise
  }
  getImage(){
    return 'assets/images/' + this.image;
  }
}