import { SallesService } from './../../services/salles.service';
import { Component, OnInit } from '@angular/core';
import { Salle } from 'src/app/services/salle';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.page.html',
  styleUrls: ['./salles.page.scss'],
})
export class SallesPage implements OnInit {

  salles : Array<Salle> = [] ;

  constructor(private sallesService: SallesService) {
    this.salles = this.sallesService.salles ;
  }

  ngOnInit() {
  }

  getImage(image){
    return 'assets/images/' + image;
  }

}
