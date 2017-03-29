import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverContentPage } from './popover';

/*
  Generated class for the Pitscouting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pitscouting',
  templateUrl: 'pitscouting.html'
})
export class PitScouting {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) { }

  teamLock(myEvent) {
     let popover = this.popoverCtrl.create(PopoverContentPage);
    popover.present({
      ev: myEvent
    });
  }
}
