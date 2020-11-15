import { Salle, SalleInterface} from "./salle";

const sallesData : Array<SalleInterface> = [
  {
    id: 1,
    image: 'salle2.jpg',
    nom: 'Première Salle',
    commune: 'Ngaliema',
    prix : 100 ,
    devise : "$"
  },
  {
    id: 2,
    image: 'salle3.jpg',
    nom: 'Deuxième Salle',
    commune: 'Kintambo',
    prix : 500 ,
    devise : "$"
  },
  {
    id: 3,
    image: 'salle4.jpg',
    nom: 'Troisième Salle',
    commune: 'Bandal',
    prix : 600 ,
    devise : "$"
  },
  {
    id: 4,
    image: 'salle4.jpg',
    nom: ' Quatrième Salle',
    commune: 'Gombe',
    prix : 800 ,
    devise : "$"
  }
];

const salles = sallesData.map(x => new Salle(x) )

export default salles