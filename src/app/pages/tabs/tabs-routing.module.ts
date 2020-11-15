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
        redirectTo : 'salles'
      },
     /*  {
        path: 'salles',
        loadChildren: () => import('../salles/salles.module').then( m => m.SallesPageModule)
      }, */
      {
        path: 'salles',
        loadChildren: () => import('../salles/salles.module').then( m => m.SallesPageModule)
      },
      {
        path: 'recherche',
        loadChildren: () => import('../recherche/recherche.module').then( m => m.RecherchePageModule)
      },
      {
        path: 'reservation',
        loadChildren: () => import('../reservation/reservation.module').then( m => m.ReservationPageModule)
      },
      {
        path: 'salles-details',
        loadChildren: () => import('../salles-details/salles-details.module').then( m => m.SallesDetailsPageModule)
      },
      {
        path: 'reserver',
        loadChildren: () => import('../reserver/reserver.module').then( m => m.ReserverPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
