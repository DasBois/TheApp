import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PushPage } from '../push/push';
import { EnducationPage } from '../enducation/enducation';
import { BusinessPage } from '../business/business';
import { SportsPage } from '../sports/sports';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
pushPage: any;

  constructor(public navCtrl: NavController) {
    this.pushPage = PushPage;
  }
  changeEducation(){
    this.navCtrl.push(EnducationPage);
  }
  changePage(){
    this.navCtrl.push(PushPage);
  }
  changeBusiness(){
    this.navCtrl.push(BusinessPage);
  }
  changeSports(){
    this.navCtrl.push(SportsPage);
  } 
}