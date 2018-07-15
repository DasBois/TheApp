import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Education2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education2',
  templateUrl: 'education2.html',
})
export class Education2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  go_to() {
    window.open('http://826la.org/volunteer/','_blank');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Education2Page');
  }

}
