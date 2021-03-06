import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Welcome } from '../pages/main/welcome';
import { GodMode } from '../pages/main/popover';
import { Page2 } from '../pages/page2/page2';
import { PitScouting } from '../pages/pitscouting/pitscouting';
import { TeamLock } from '../pages/pitscouting/popover';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '66889b09'
  }
};

@NgModule({
  declarations: [
    MyApp,
    Welcome,
    GodMode,
    Page2,
    PitScouting,
    TeamLock
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Welcome,
    GodMode,
    Page2,
    PitScouting,
    TeamLock
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
