import { Component } from '@angular/core';
import { NavController, PopoverController, NavPush } from 'ionic-angular';
import { GodMode } from './popover';
import { PitScouting } from '../pitscouting/pitscouting';

@Component({
  selector: 'main-main',
  templateUrl: 'main.html',
})
export class Welcome {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
  }
  PitScouting = PitScouting;
  godMode(myEvent) {
    let popover = this.popoverCtrl.create(GodMode);
    popover.present({
      ev: myEvent
    });
  }
}