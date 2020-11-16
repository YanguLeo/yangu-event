export class CommuneInterface {
  id: Number;
  nom: String;
}

export class Commune extends CommuneInterface{
  constructor(data) {
    super()
    this.id = data.id
    this.nom = data.nom
  }
}