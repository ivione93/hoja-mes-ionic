import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-competition',
  templateUrl: './new-competition.page.html',
  styleUrls: ['./new-competition.page.scss'],
})
export class NewCompetitionPage implements OnInit {

  constructor(private router: Router,
              private alertController: AlertController,
              private toastController: ToastController) { }

  ngOnInit() {
  }

  goBack() {
    this.presentAlertConfirm();
  }

  goCompetitions() {
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Salir sin guardar?',
      mode: 'ios',
      message: 'Se perderán todos los cambios no guardados',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            alert.dismiss();
          }
        }, {
          text: 'Salir',
          id: 'confirm-button',
          handler: () => {
            this.router.navigate(['/home/competitions']);
          }
        }
      ]
    });

    await alert.present();
  }

  saveCompetition() {
    this.presentToast();
    this.router.navigate(['/home/competitions']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Competición guardada',
      duration: 1000,
      position: 'top',
    });
    toast.present();
  }

}
