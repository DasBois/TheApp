import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Business1Page } from '../business1/business1';
import { Business2Page } from '../business2/business2';
import { Business3Page } from '../business3/business3';

/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  changeBusi1(){
    this.navCtrl.push(Business1Page);
  }
    changeBusi2(){
      this.navCtrl.push(Business2Page);
    }
      changeBusi3(){
        this.navCtrl.push(Business3Page);
      }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPage');
  }

}
