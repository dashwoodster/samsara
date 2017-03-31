import { Component } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';
import * as Bcryptjs from "bcryptjs";

@Component({
  templateUrl: 'popover.html'
})

export class GodMode {
  
  public hash: string;
  public result: boolean;

  constructor(public viewCtrl: ViewController, public alertCtrl: AlertController) { }

  authentication() {
    let prompt = this.alertCtrl.create({
      title: 'Gode Mode Authentication',
      message: "Only the heads of the Scouting Team can access this",
      inputs : [
        {
          name: 'Password',
          type: 'password',
          placeholder: 'Password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Exited Godmode prompt');
            this.viewCtrl.dismiss();
          }
        },
        {
          text: 'Authenticate',
          handler: data =>{
            this.result = Bcryptjs.compareSync(data, "$2a$06$BLaLTSB8AixB.bd4OLNKuOc.CXMS/I27haszcgITbN6niSuAZhv1y");
            console.log(this.result);
          }
        }
      ]
    });
    prompt.present();
  }

  close() {
    this.viewCtrl.dismiss();
  }
}