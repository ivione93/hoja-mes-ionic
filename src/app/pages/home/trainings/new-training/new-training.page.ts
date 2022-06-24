import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonSlides, ModalController, ToastController } from '@ionic/angular';
import { ModalCuestasComponent } from 'src/app/components/modal-cuestas/modal-cuestas.component';
import { ModalGymComponent } from 'src/app/components/modal-gym/modal-gym.component';
import { ModalSeriesComponent } from 'src/app/components/modal-series/modal-series.component';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.page.html',
  styleUrls: ['./new-training.page.scss'],
})
export class NewTrainingPage implements OnInit {

  inExtras: boolean = false;
  step: string = "Paso 1 de 2";
  step1: string = "Paso 1 de 2";
  step2: string = "Paso 2 de 2";

  slideOpts = {
    allowTouchMove: false
  }

  @ViewChild('mySlider')slides: IonSlides;

  constructor(private router: Router,
              private toastController: ToastController,
              private alertController: AlertController,
              private modalController: ModalController) { }

  ngOnInit() {
  }

  goBack() {
    if (this.inExtras) {
      this.inExtras = false;
      this.step = this.step1;
      this.slides.slidePrev();
    } else {
      this.presentAlertConfirm();
    }
  }

  goTrainings() {
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
            if (this.inExtras) {
              this.slides.slidePrev();
            }
            this.inExtras = false;
            this.step = this.step1;
            this.router.navigate(['/home/trainings']);
          }
        }
      ]
    });

    await alert.present();
  }

  swipeNext(){
    this.inExtras = true;
    this.step = this.step2;
    this.slides.slideNext();
  }

  saveTraining() {
    this.presentToast();
    this.inExtras = false;
    this.step = this.step1;
    this.router.navigate(['/home/trainings']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Entrenamiento guardado',
      duration: 1000,
      position: 'top',
    });
    toast.present();
  }

  async showSeries() {
    const modal = await this.modalController.create({
      component: ModalSeriesComponent,
      initialBreakpoint: 0.65,
      breakpoints: [0, 0.5, 1],
      backdropDismiss: false,
      componentProps: {
        nombre: 'Iván',
        pais: 'ESP'
      }
    });
    await modal.present();
  }

  async showCuestas() {
    const modal = await this.modalController.create({
      component: ModalCuestasComponent,
      initialBreakpoint: 0.4,
      breakpoints: [0, 0.5, 1],
      backdropDismiss: false,
      componentProps: {
        nombre: 'Iván',
        pais: 'ESP'
      }
    });
    await modal.present();
  }

  async showGym() {
    const modal = await this.modalController.create({
      component: ModalGymComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
      backdropDismiss: false,
      componentProps: {
        nombre: 'Iván',
        pais: 'ESP'
      }
    });
    await modal.present();
  }

}
