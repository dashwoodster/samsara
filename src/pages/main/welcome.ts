import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverContentPage } from './popover';
import { PitScouting } from '../pitscouting/pitscouting';

@Component({
  selector: 'main-main',
  templateUrl: 'main.html',
})
export class Welcome {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) { }

  godMode(myEvent) {
     let popover = this.popoverCtrl.create(PopoverContentPage);
    popover.present({
      ev: myEvent
    });
  }

  pushPitScouting() {
   this.navCtrl.push(PitScouting);
  }
}