import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tech2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tech2',
  templateUrl: 'tech2.html',
})
export class Tech2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  go_to() {
    window.open('https://www.diygirls.org/volunteer','_blank');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tech2Page');
  }

}
