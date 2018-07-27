import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { Education1Page } from '../education1/education1';
import { Sports1Page } from '../sports1/sports1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  changePage(){
    this.navCtrl.push(InfoPage);
  }
  changeSp1(){
    this.navCtrl.push(Sports1Page);
  } 

  changeEduPage(){
    this.navCtrl.push(Education1Page);
  }
}
