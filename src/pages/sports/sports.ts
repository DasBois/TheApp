import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sports1Page } from '../sports1/sports1';
import { Sports2Page } from '../sports2/sports2';
import { Sports3Page } from '../sports3/sports3'

/**
 * Generated class for the SportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  changeSport1(){
    this.navCtrl.push(Sports1Page);
  }

  changeSport2(){
    this.navCtrl.push(Sports2Page);
  }

  changeSport3(){
    this.navCtrl.push(Sports3Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsPage');
  }

}
