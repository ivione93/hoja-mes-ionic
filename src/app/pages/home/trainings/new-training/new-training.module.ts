import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTrainingPageRoutingModule } from './new-training-routing.module';

import { NewTrainingPage } from './new-training.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTrainingPageRoutingModule
  ],
  declarations: [NewTrainingPage]
})
export class NewTrainingPageModule {}
