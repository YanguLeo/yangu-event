import { SalleService } from '../../services/salle.service';
import { Component, OnInit } from '@angular/core';
import { Salle } from 'src/app/models/salle';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.page.html',
  styleUrls: ['./salles.page.scss'],
})
export class SallesPage implements OnInit {

  salles : Array<Salle> = [] ;

  constructor(private sallesService: SalleService) {
    this.salles = this.sallesService.salles ;
  }

  ngOnInit() {
  }

}
