import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { TeamLock } from './popover';
import { Validators, FormGroup, FormControl } from '@angular/forums';

@Component({
  selector: 'page-pitscouting',
  templateUrl: 'pitscouting.html'
})
export class PitScouting {
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) { }
  
  teamLock(myEvent) {
     let popover = this.popoverCtrl.create(TeamLock);
    popover.present({
      ev: myEvent
    });
  }
}
