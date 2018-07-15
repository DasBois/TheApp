import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tech3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tech3',
  templateUrl: 'tech3.html',
})
export class Tech3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  go_to() {
    window.open('https://www.nten.org/membership/join/','_blank');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tech3Page');
  }

}
