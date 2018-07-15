import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PushPage } from '../pages/push/push';
import { InfoPage } from '../pages/info/info';
import { EnducationPage } from '../pages/enducation/enducation';
import { BusinessPage } from '../pages/business/business';
import { SportsPage } from '../pages/sports/sports';
import { Business1Page } from '../pages/business1/business1';
import { Business2Page } from '../pages/business2/business2';
import { Business3Page } from '../pages/business3/business3';
import { Education1Page } from '../pages/education1/education1';
import { Education2Page } from '../pages/education2/education2';
import { Education3Page } from '../pages/education3/education3';
import { Sports1Page } from '../pages/sports1/sports1';
import { Sports2Page } from '../pages/sports2/sports2';
import { Sports3Page } from '../pages/sports3/sports3';
import { Tech2Page } from '../pages/tech2/tech2';
import { Tech3Page } from '../pages/tech3/tech3';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PushPage,
    InfoPage,
    EnducationPage,
    BusinessPage,
    SportsPage,
    Business1Page,
    Business2Page,
    Business3Page,
    Education1Page,
    Education2Page,
    Education3Page,
    Sports1Page,
    Sports2Page,
    Sports3Page,
    Tech2Page,
    Tech3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PushPage,
    InfoPage,
    EnducationPage,
    BusinessPage,
    SportsPage,
    Business1Page,
    Business2Page,
    Business3Page,
    Education1Page,
    Education2Page,
    Education3Page,
    Sports1Page,
    Sports2Page,
    Sports3Page,
    Tech2Page,
    Tech3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
