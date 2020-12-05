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
      },
      {
        path: 'salles-details',
        loadChildren: () => import('../salles-details/salles-details.module').then( m => m.SallesDetailsPageModule)
      },
      {
        path: 'reserver',
        loadChildren: () => import('../reserver/reserver.module').then( m => m.ReserverPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'creation-salle',
        loadChildren: () => import('../creation-salle/creation-salle.module').then( m => m.CreationSallePageModule)
      },
      {
        path: 'compte',
        loadChildren: () => import('../compte/compte.module').then( m => m.ComptePageModule)
      },
      {
        path: 'inscription',
        loadChildren: () => import('../inscription/inscription.module').then( m => m.InscriptionPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
