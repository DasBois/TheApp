import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Business2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business2',
  templateUrl: 'business2.html',
})
export class Business2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  go_to() {
    window.open('https://www.kauffman.org/stay-connected','_blank');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Business2Page');
  }

}
