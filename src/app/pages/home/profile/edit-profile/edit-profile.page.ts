import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  type: string;

  constructor(private router: Router,
              private alertController: AlertController,
              private actionSheetController: ActionSheetController) { 
    this.type = 'total';
  }

  ngOnInit() {}

  saveEditProfile() {
    console.log("saveEditProfile() ");
  }

  deleteUser() {
    console.log("deleteUser() ");
  }

  async presentAlertConfirmNoSave() {
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
            this.router.navigate(['/home/profile']);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      //header: 'Opciones de cuenta',
      buttons: [{
        text: 'Cerrar sesión',
        icon: 'log-out-outline',
        data: "ivgarciag93@gmail.com", //para mandar el dato
        handler: () => {
          this.logout();
        }
      }, {
        text: 'Eliminar cuenta',
        icon: 'trash-outline',
        // data: 'Data value', para mandar el dato
        handler: () => {
          this.deleteUser();
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  logout() {
    this.presentAlertConfirmLogout();
  }

  async presentAlertConfirmLogout() {
    const alert = await this.alertController.create({
      header: 'Salir',
      mode: 'ios',
      message: '¿Está seguro que quiere cerrar sesión?!',
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
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }

}
