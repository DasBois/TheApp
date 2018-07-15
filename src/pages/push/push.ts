import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { Tech2Page } from '../tech2/tech2';
import { Tech3Page } from '../tech3/tech3';

/**
 * Generated class for the PushPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-push',
  templateUrl: 'push.html',
})
export class PushPage {
  pushPage: any
  infoPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.infoPage = InfoPage;
  }

  changePage(){
    this.navCtrl.push(InfoPage);
  }

  changeTech2(){
    this.navCtrl.push(Tech2Page);
  }

  changeTech3(){
    this.navCtrl.push(Tech3Page);
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PushPage');
  }

  log() {
    console.log('click');
  }
}
