import { SalleService } from '../../services/salle.service';
import { Component, OnInit } from '@angular/core';
import { Salle } from 'src/app/models/salle';
import { Subscription } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.page.html',
  styleUrls: ['./salles.page.scss'],
})
export class SallesPage implements OnInit {

  salles : Array<Salle> = [] ;
  s_salles: Subscription;

  constructor(private sallesService: SalleService, private router : Router) {
  }

  ngOnInit() {
    this.s_salles = this.sallesService.b_salles.subscribe(x => {
      this.salles = x
    })
  }

  ngOnDestroy(): void {
    this.s_salles.unsubscribe()
  }

  showDetails(salle : Salle) {
    let navigationExtras: NavigationExtras = {
      state: {
        salle: salle
      }
    };
    this.router.navigate(['/tabs/salles-details'], navigationExtras);
  }
  reserver(salle : Salle) {
    let navigationExtras: NavigationExtras = {
      state: {
        salle: salle
      }
    };
    this.router.navigate(['/tabs/reserver'], navigationExtras);
  }

}
