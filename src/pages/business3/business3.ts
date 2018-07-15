import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Business3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business3',
  templateUrl: 'business3.html',
})
export class Business3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  go_to() {
    window.open('https://www.ashoka.org/en/engage','_blank');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Business3Page');
  }

}
