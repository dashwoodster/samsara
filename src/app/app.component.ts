import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SqliteTemporary } from '../providers/sqlite-temporary';

import { Welcome } from '../pages/main/welcome';
import { Page2 } from '../pages/page2/page2';
import { PitScouting } from '../pages/pitscouting/pitscouting';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Welcome;

  pages: Array<{ title: string, component: any, color: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public sqlStorage: SqliteTemporary) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Pit Scounting', component: PitScouting, color: 'light' },
      { title: 'Match Scouting', component: Page2, color: 'light' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    page.color = 'danger';

    for (let p of this.pages) {

      if (p.title == page.title) {
        p.color = 'danger';
      }
      else {
        p.color = '';
      }
    }
  }

  // pushMain() {
  //   this.nav.setRoot(TabsPage);
  //   this.nav.popToRoot();
  // }
}
