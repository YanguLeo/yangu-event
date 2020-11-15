import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SallesDetailsPage } from './salles-details.page';

const routes: Routes = [
  {
    path: '',
    component: SallesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SallesDetailsPageRoutingModule {}
