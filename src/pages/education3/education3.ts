import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Education3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education3',
  templateUrl: 'education3.html',
})
export class Education3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  go_to() {
    window.open('http://inner-cityarts.org/volunteer','_blank');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Education3Page');
  }

}
