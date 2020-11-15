import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo : 'salle'
      },
      {
        path: 'salle',
        loadChildren: () => import('../salles/salles.module').then( m => m.SallesPageModule)
      },
      {
        path: 'recherche',
        loadChildren: () => import('../recherche/recherche.module').then( m => m.RecherchePageModule)
      },
      {
        path: 'reservation',
        loadChildren: () => import('../reservation/reservation.module').then( m => m.ReservationPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
