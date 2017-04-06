import { Component } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';
import { SqliteTemporary } from '../../providers/sqlite-temporary';
import * as Bcryptjs from "bcryptjs";

@Component({
  templateUrl: 'popover.html'
})

export class GodMode {
  public hash: string;
  public result: boolean;

  constructor(public viewCtrl: ViewController, public alertCtrl: AlertController, public sqlite: SqliteTemporary) { }

  new() {
    this.sqlite.openDb();
  }

  authentication() {
    let prompt = this.alertCtrl.create({
      title: 'Gode Mode Authentication',
      message: "Only the heads of the Scouting Team can access this",
      inputs: [
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
          handler: data => {
            this.hash = "$2a$10$ULkgRFdPYbHnwKhqVL0ELu7f4tF1foMH8GMwKqHklSeDK2vC2s1gS";
            console.log('Decryption Start');
            this.result = Bcryptjs.compareSync(data, this.hash);
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