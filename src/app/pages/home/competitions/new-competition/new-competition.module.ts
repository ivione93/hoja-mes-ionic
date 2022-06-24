import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCompetitionPageRoutingModule } from './new-competition-routing.module';

import { NewCompetitionPage } from './new-competition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCompetitionPageRoutingModule
  ],
  declarations: [NewCompetitionPage]
})
export class NewCompetitionPageModule {}
