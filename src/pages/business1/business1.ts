import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Business1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business1',
  templateUrl: 'business1.html',
})
export class Business1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  go_to() {
    window.open('https://youthentrepreneurs.org/get-involved/volunteer-form','_blank');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Business1Page');
  }

}
