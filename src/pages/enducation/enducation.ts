import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Education1Page } from '../education1/education1';
import { Education2Page } from '../education2/education2';
import { Education3Page } from '../education3/education3';

/**
 * Generated class for the EnducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enducation',
  templateUrl: 'enducation.html',
})
export class EnducationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  changeEdu1(){
    this.navCtrl.push(Education1Page);
  }

  changeEdu2(){
    this.navCtrl.push(Education2Page);
  }

  changeEdu3(){
    this.navCtrl.push(Education3Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnducationPage');
  }

}
