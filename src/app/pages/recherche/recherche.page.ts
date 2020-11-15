import { Component, OnInit } from '@angular/core';
import { SallesService } from './../../services/salles.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {
  sallesFiltred = [];
  salles = [] ;

  constructor(private sallesService: SallesService) {
    this.salles = this.sallesService.salles ;
  }

  ngOnInit() {
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
