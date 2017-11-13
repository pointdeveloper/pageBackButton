import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,platform: Platform) {
    platform.registerBackButtonAction(() => {
      console.log("backPressed 1");
    },1);
  }
  goToSecond(){
    this.navCtrl.push(SecondPage);
  }
}
