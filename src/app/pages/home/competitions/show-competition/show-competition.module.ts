import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowCompetitionPageRoutingModule } from './show-competition-routing.module';

import { ShowCompetitionPage } from './show-competition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowCompetitionPageRoutingModule
  ],
  declarations: [ShowCompetitionPage]
})
export class ShowCompetitionPageModule {}
