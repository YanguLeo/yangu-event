import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SallesDetailsPageRoutingModule } from './salles-details-routing.module';

import { SallesDetailsPage } from './salles-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SallesDetailsPageRoutingModule
  ],
  declarations: [SallesDetailsPage]
})
export class SallesDetailsPageModule {}
