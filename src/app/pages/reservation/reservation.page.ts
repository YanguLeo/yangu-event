import { ReservationsService } from '../../services/reservations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  reservation = [] ;

  constructor(private ReservationsService: ReservationsService) {
    this.reservation = this.ReservationsService.reservations ;
    console.log(this.reservation)
  }

  ngOnInit() {
  }

  getImage(image){
    return 'assets/images/' + image;
  }

}
