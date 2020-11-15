import { Client , ClientInterface} from './client';

const clientsData : Array<ClientInterface> = [
  {
    id: 1,
    nom: 'Jessie',
    postnom: 'Munyanga',
    prenom: ' Mwavita',
    adresse: 'Ngaliema',
    telephone : '0854147845' ,
    email : 'jessieyollenn@gamil.com' ,
    password : '78122778jessie'
  },
  {
    id: 2,
    nom: 'Clémence',
    postnom: 'Bulunga',
    prenom: ' Nyembo',
    adresse: 'Ngaliema',
    telephone : '0914578124' ,
    email : 'Clemenceb@gamil.com' ,
    password : '7812278clecle'
  },
  {
    id: 3,
    nom: 'jonathan',
    postnom: 'Kolomoni',
    prenom: ' Mutamba',
    adresse: 'Gombe',
    telephone : '098457812' ,
    email : 'jokero@gamil.com' ,
    password : '781227jokero'
  },
  {
    id: 4,
    nom: 'John',
    postnom: 'Rashidi',
    prenom: ' Ntumba',
    adresse: 'Kintambo',
    telephone : '094512458' ,
    email : 'johnkasvic@gamil.com' ,
    password : '781227johnkas'
  },
];

const clients = clientsData.map(x => new Client(x) )

export default clients