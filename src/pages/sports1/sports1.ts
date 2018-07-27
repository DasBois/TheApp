import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Sports1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sports1',
  templateUrl: 'sports1.html',
})
export class Sports1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  go_to() {
    window.open('https://homecourt.up2us.org/networking/opening_search.asp','_blank');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Sports1Page');
  }

}
