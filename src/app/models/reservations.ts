import { Reservation , ReservationInterface} from './reservation';

const reservationsData : Array<ReservationInterface> = [
  {
    id: 1,
    dateDebut: '2020-05-15',
    dateFin: '2020-06-4',
    prix: ' 100',
    deviseId: 1,
    reservationTypeId : 'Anniversaire' ,
    clientId : 1 ,
    salleId : 1,
  },
  {
    id: 2,
    dateDebut: '2020-06-15',
    dateFin: '2020-08-4',
    prix: ' 500',
    deviseId: 2,
    reservationTypeId : 'Mariage' ,
    clientId : 2 ,
    salleId : 1,
  },
  {
    id: 3,
    dateDebut: '2020-04-1',
    dateFin: '2020-08-4',
    prix: ' 1000',
    deviseId: 2,
    reservationTypeId : 'Anniversaire' ,
    clientId : 2 ,
    salleId : 1,
  },

  
];

const reservations = reservationsData.map(x => new Reservation(x) )

export default reservations