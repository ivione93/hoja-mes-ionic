import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowCompetitionPage } from './show-competition.page';

const routes: Routes = [
  {
    path: '',
    component: ShowCompetitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowCompetitionPageRoutingModule {}
