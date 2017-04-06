import { Component } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import * as Bcryptjs from "bcryptjs";

@Component({
  templateUrl: 'popover.html'
})

export class GodMode {
  public hash: string;
  public result: boolean;

  constructor(public viewCtrl: ViewController, private alertCtrl: AlertController, private sqlite: SQLite) { }

success() {
  let alert = this.alertCtrl.create({
    title: 'Database Made',
    subTitle: 'A new database has been created!',
    buttons: ['Dismiss']
  });
  alert.present();
}

  new() {
    this.success();
    this.sqlite.create({
      name: 'MAR_.db',
      location: 'default'
    }).then((db: SQLiteObject) => {


      db.executeSql('create table danceMoves(name VARCHAR(32))', {})
        .then(() => this.success());
  })
  .catch(e => console.log(e));
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