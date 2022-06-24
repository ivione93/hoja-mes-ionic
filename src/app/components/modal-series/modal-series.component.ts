import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-series',
  templateUrl: './modal-series.component.html',
  styleUrls: ['./modal-series.component.scss'],
})
export class ModalSeriesComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}
  
  dismissModal() {
    console.log("Dismiss");
    this.modalController.dismiss();
  }

  saveSerie() {
    this.dismissModal();
  }

}
