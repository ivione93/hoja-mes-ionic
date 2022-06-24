import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name: string = "Iván García Gómez";
  type: string;

  slidesOptions = {
    slidesPerView: 1
  }

  constructor(private router: Router,
              public actionSheetController: ActionSheetController) {
                this.type = 'total';
  }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones rápidas',
      buttons: [{
        text: 'Editar perfil',
        icon: 'pencil',
        data: "ivgarciag93@gmail.com", //para mandar el dato
        handler: () => {
          this.router.navigate(['/edit-profile']);
        }
      }, {
        text: 'Añadir entrenamiento',
        icon: 'add-sharp',
        // data: 'Data value', para mandar el dato
        handler: () => {
          this.router.navigate(['/new-training']);
        }
      }, {
        text: 'Añadir competición',
        icon: 'add-sharp',
        handler: () => {
          this.router.navigate(['/new-competition']);
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

  goProfile() {
    console.log("goProfile()");
    this.router.navigate(['/edit-profile']);
  }

}
