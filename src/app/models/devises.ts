import { Devise, DeviseInterface } from './devise';

const devisesData : Array<DeviseInterface> = [
  {
    id: 1,
    nom: 'FC'
  }, 
  {
    id: 2,
    nom: '$'
  }, 
];

const devises = devisesData.map(x => new Devise(x) )

export default devises