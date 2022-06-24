import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-show-competition',
  templateUrl: './show-competition.page.html',
  styleUrls: ['./show-competition.page.scss'],
})
export class ShowCompetitionPage implements OnInit {

  constructor(private router: Router,
              private actionSheetController: ActionSheetController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/home/competitions']);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Entrenamiento',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Editar',
        icon: 'pencil',
        data: 'Data value',
        handler: () => {
          this.router.navigate(['/new-competition']);
        }
      }, {
        text: 'Compartir',
        icon: 'share-social',
        data: 'Data value',
        handler: () => {
          //this.router.navigate(['/new-competition']);
        }
      }, {
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          this.presentAlertConfirm();
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
      header: 'Eliminar competición',
      message: '¿Está seguro que quiere eliminar la competición?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
