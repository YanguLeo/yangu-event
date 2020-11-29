import { ReservationService } from '../../services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  s_reservation: Subscription;
  reservations = [];


  constructor(private reservationsService: ReservationService) {
  }

  ngOnInit() {
    this.s_reservation = this.reservationsService.b_reservations.subscribe(x => {
      this.reservations = x
      console.log("Réservation : ", this.reservations);
    })
  }

  ngOnDestroy(): void {
    this.s_reservation.unsubscribe()
  }

}
