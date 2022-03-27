import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  PopoverController,
} from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  promptEvent: any = null;

  constructor(
    private popover: PopoverController,
    private alertController: AlertController
  ) {
    window.addEventListener(
      'beforeinstallprompt', event => {
        this.promptEvent = event;
      });
  }

  onInstall(){
    this.promptEvent.prompt();
  }

  openMenu(myevent: MouseEvent): void {
    this.popover
      .create({
        component: MenuComponent,
        showBackdrop: true,
        cssClass: 'my-menu-class',
        event: myevent,
        componentProps: {
          myprop: 'xxxx',
        },
      })
      .then((popoverElement) => {
        popoverElement.present();
        popoverElement.onDidDismiss().then((res) => {
          console.log(res);
        });
      });
  }

  async openAlert() {
    const monMessage = 'le message de l\'alerte';
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: monMessage,
      buttons: ['OK'],
    });

    await alert.present();
    await alert.onDidDismiss();
  }
}
