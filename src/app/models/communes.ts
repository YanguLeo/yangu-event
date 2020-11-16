import { Commune, CommuneInterface } from "./commune";



const communesData : Array<CommuneInterface> = [
  {
    id: 1,
    nom: 'Gombe'
  }, 
  {
    id: 2,
    nom: 'Kinambo'
  }, 
  {
    id: 3,
    nom : 'Ngaliema'
  },
  {
    id: 4,
    nom: 'Ndjili'
  }
];

const communes = communesData.map(y => new Commune(y));

export default communes