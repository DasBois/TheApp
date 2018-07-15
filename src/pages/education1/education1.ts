import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Education1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education1',
  templateUrl: 'education1.html',
})
export class Education1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  go_to() {
    window.open('https://www.9dots.org/getcoding','_blank');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Education1Page');
  }

}
