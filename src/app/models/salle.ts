export class SalleInterface {
  id: Number;
  image: String ; 
  nom: String;
  adresse: String;
  commune: String; 
  prix: string;
  devise: String;
  faculteOccupation: String;
  telephone :String

}

export class Salle extends SalleInterface {
  constructor(data) {
    super()
    this.id = data.id
    this.image = data.image
    this.nom = data.nom
    this.adresse = data.adresse
    this.commune = data.commune
    this.prix = data.prix
    this.devise = data.devise
    this.faculteOccupation = data.faculteOccupation
    this.telephone = data.telephone
  }
  getPrice (){
    return this.prix + " " + this.devise
  }
  getImage(){
    return 'assets/images/' + this.image;
  }
}