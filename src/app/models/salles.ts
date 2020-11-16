import { Salle, SalleInterface} from "./salle";

const sallesData : Array<SalleInterface> = [
  {
    id: 1,
    image: 'salle2.jpg',
    nom: 'Marie France Hotel',
    adresse: 'Avenue Kasavubu',
    commune: 'Kintambo',
    prix : 1000 ,
    devise: "$",
    faculteOccupation: '850 personnes',
    entreprise : ''

  },
  {
    id: 2,
    image: 'salle3.jpg',
    nom: 'Dare Dare',
    adresse: 'Avenue brikin  13',
    commune: 'Kintambo',
    prix : 500 ,
    devise: "$",
    faculteOccupation: '650 personnes',
    entreprise: ''
  },
  {
    id: 3,
    image: 'salle4.jpg',
    nom: 'Umbrella',
    adresse: 'Avenue banana 30',
    commune: 'Kintambo',
    prix : 300 ,
    devise: "$",
    faculteOccupation: '200 personnes',
    entreprise: ''
  },
  {
    id: 4,
    image: 'salle4.jpg',
    nom: ' Marilynne',
    adresse: 'Avenue Kwamouth 5',
    commune: 'Kitambo',
    prix : 800 ,
    devise: "$",
    faculteOccupation: '450 personnes',
    entreprise: ''
  }
];

const salles = sallesData.map(x => new Salle(x) )

export default salles