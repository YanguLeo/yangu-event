import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Salle } from 'src/app/models/salle';

@Component({
  selector: 'app-salles-details',
  templateUrl: './salles-details.page.html',
  styleUrls: ['./salles-details.page.scss'],
})
export class SallesDetailsPage implements OnInit {

  salle: Salle
  
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.salle = this.router.getCurrentNavigation().extras.state.salle;
      }
      console.log(this.salle)
    });
  }

  ngOnInit() {
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
