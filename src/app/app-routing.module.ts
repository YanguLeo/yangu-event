import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  /* {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  }, */
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch : 'full'
  },
  {
    path: 'creation-salle',
    loadChildren: () => import('./pages/creation-salle/creation-salle.module').then( m => m.CreationSallePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
