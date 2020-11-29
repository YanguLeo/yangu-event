import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationSallePage } from './creation-salle.page';

const routes: Routes = [
  {
    path: '',
    component: CreationSallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationSallePageRoutingModule {}
