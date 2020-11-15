import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salle } from 'src/app/models/salle';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.page.html',
  styleUrls: ['./reserver.page.scss'],
})
export class ReserverPage implements OnInit {

  salle: Salle
  debutDate : null
  finDate : null
  
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

  getMinDate() {
    const d : Date = new Date()
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
  }

  reserver() {
    console.log(this.debutDate)
    console.log(this.finDate)
    
  }
}
