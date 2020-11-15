import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SalleService } from '../../services/salle.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {
  sallesFiltred = [];
  salles = [];
  s_salles: Subscription;

  constructor(private sallesService: SalleService) {
  }

  ngOnInit() {
    this.s_salles = this.sallesService.b_salles.subscribe(x => {
      this.salles = x
    })
  }

  ngOnDestroy(): void {
    this.s_salles.unsubscribe()
  }

  search(value) {
    value = value.trim();
    if (value == "") {
      this.sallesFiltred = [];
    }
    else{
      this.sallesFiltred = 
        this.salles.filter(
          (x) => {
            const value_lc = value.toLowerCase()
            const nom_lc = x.nom.toLowerCase()
            const commune_lc = x.commune.toLowerCase()

            return value_lc.indexOf(nom_lc) != -1 ||
              nom_lc.indexOf(value_lc) != -1 ||
              commune_lc.indexOf(value_lc) != -1 ||
              value_lc.indexOf(commune_lc) != -1;
          }
        )
    }
  }

  getImage(image){
    return 'assets/images/' + image;
  }

}
