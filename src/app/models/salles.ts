import { Salle, SalleInterface} from "./salle";

const sallesData : Array<SalleInterface> = [
  {
    id: 1,
    image: 'salle2.jpg',
    nom: 'Première Salle',
    adresse: 'Avenue Colonel Ebeya 56',
    commune: 'Ngaliema',
    prix : 100 ,
    devise: "$",
    faculteOccupation: '700 personne',
    entreprise : ''

  },
  {
    id: 2,
    image: 'salle3.jpg',
    nom: 'Deuxième Salle',
    adresse: 'Avenue Matadi  6',
    commune: 'Kintambo',
    prix : 500 ,
    devise: "$",
    faculteOccupation: '850 personnes',
    entreprise: ''
  },
  {
    id: 3,
    image: 'salle4.jpg',
    nom: 'Troisième Salle',
    adresse: 'Avenue Brikin 30',
    commune: 'Bandal',
    prix : 600 ,
    devise: "$",
    faculteOccupation: '1000 personnes',
    entreprise: ''
  },
  {
    id: 4,
    image: 'salle4.jpg',
    nom: ' Quatrième Salle',
    adresse: 'Avenue Kisangani 5',
    commune: 'Gombe',
    prix : 800 ,
    devise: "$",
    faculteOccupation: '350 personnes',
    entreprise: ''
  }
];

const salles = sallesData.map(x => new Salle(x) )

export default salles