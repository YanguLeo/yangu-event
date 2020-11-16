
import { Adresse, AdresseInterface } from './adresse';

const devisesData : Array<AdresseInterface> = [
  {
    id: 1,
    nom: 'Avenue Inongo numéro 48'
  }, 
  {
    id: 2,
    nom: 'Avenue Kasavubu numéro 5'
  }, 
];

const devises = devisesData.map(z => new Adresse(z) );


export default devises