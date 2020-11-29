import { Salle, SalleInterface} from "./salle";

const sallesData : Array<SalleInterface> = [
  {
    id: 1,
    image: 'marifrancehotel.jpg',
    nom: 'Marie France Hotel',
    adresse: 'Wenze, Kintambo, 11 Rue Vivi, Kinshasa',
    commune: "Kintambo",
    prix : '0' ,
    devise: "$",
    telephone : '(+243) 970 301 557 ',
    faculteOccupation: '850 personnes'

  },
  {
    id: 2,
    image: 'memling hotel.jpg',
    nom: 'Hotel Memling',
    adresse: 'Avenue brikin  13',
    commune: "Ngaliema",
    prix : '1500' ,
    devise: "$",
    telephone : '(+243) 824 591 331',
    faculteOccupation: '650 personnes'
  },
  {
    id: 3,
    image: 'hotel-royal.jpg',
    nom: 'Hotel Royal',
    adresse: 'Avenue banana 30',
    commune: "Kintambo",
    prix : "500" ,
    devise: "$",
    telephone : '(+243) 824 591 331',
    faculteOccupation: '200 personnes'
  },
];

const salles = sallesData.map(x => new Salle(x) )

export default salles