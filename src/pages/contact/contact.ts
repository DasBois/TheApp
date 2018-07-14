import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
  
})
export class ContactPage implements OnInit {

  condition: boolean;
  verify: boolean;

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController) {
    this.initializeItems();

  }

  ngOnInit () {
    this.condition = false;

  }

  check() {
    this.condition = true;
  }


  changePage(item){
    
    if (item == 'TxT'){
      this.navCtrl.push(InfoPage);
    
    }
  }

  initializeItems() {
    this.items = [
      'TxT',
      'Non-profit',
      'Profit-Non',
      'Yu-gi-oh Club',
      'Txter',
      'Txter'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    this.check();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
