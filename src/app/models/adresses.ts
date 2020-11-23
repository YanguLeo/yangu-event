
import { Adresse, AdresseInterface } from './adresse';

const adresseData : Array<AdresseInterface> = [
  {
    id: 1,
    nom: 'Avenue Inongo numéro 48'
  }, 
  {
    id: 2,
    nom: 'Avenue Kasavubu numéro 5'
  }, 
];

const adresse = adresseData.map(z => new Adresse(z) );


export default adresse