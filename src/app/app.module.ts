import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NombreProvider } from '../providers/nombre/nombre';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable  }  from 'angularfire2/database'

export const config = {
    apiKey: "AIzaSyA65D-qVw9vuvgIEwwkQznbfcmV9xoauGk",
    authDomain: "miejemplo-bc4a4.firebaseapp.com",
    databaseURL: "https://miejemplo-bc4a4.firebaseio.com",
    projectId: "miejemplo-bc4a4",
    storageBucket: "miejemplo-bc4a4.appspot.com",
    messagingSenderId: "1080648642684"
  }

  firebase.initializeApp(config)

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NombreProvider
  ]
})
export class AppModule {}
