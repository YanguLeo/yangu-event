import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationSallePageRoutingModule } from './creation-salle-routing.module';

import { CreationSallePage } from './creation-salle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationSallePageRoutingModule
  ],
  declarations: [CreationSallePage]
})
export class CreationSallePageModule {}
