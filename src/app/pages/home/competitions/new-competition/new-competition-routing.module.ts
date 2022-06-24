import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCompetitionPage } from './new-competition.page';

const routes: Routes = [
  {
    path: '',
    component: NewCompetitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCompetitionPageRoutingModule {}
