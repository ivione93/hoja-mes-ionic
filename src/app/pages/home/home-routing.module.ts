import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../home/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'trainings',
        loadChildren: () => import('../home/trainings/trainings.module').then(m => m.TrainingsPageModule)
      },
      {
        path: 'competitions',
        loadChildren: () => import('../home/competitions/competitions.module').then(m => m.CompetitionsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
