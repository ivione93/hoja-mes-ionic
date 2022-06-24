import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-cuestas',
  templateUrl: './modal-cuestas.component.html',
  styleUrls: ['./modal-cuestas.component.scss'],
})
export class ModalCuestasComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

  saveCuestas() {
    this.dismissModal();
  }

}
