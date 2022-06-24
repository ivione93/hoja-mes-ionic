import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-gym',
  templateUrl: './modal-gym.component.html',
  styleUrls: ['./modal-gym.component.scss'],
})
export class ModalGymComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  saveGym() {
    this.dismissModal();
  }

}
