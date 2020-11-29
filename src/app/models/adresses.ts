
import { Adresse, AdresseInterface } from './adresse';

const adressesData : Array<AdresseInterface> = [
  {
    id: 1,
    nom: 'Avenue Inongo numéro 48'
  }, 
  {
    id: 2,
    nom: 'Avenue Kasavubu numéro 5'
  }, 
];

const adresses = adressesData.map(x => new Adresse(x) );


export default adresses