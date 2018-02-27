import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
    var playList = {
      movie1: "Sight-seeing KL",
      movie2: "Sight-seeing KL",
      movie3: "Sight-seeing KL",
      movie4: "Sight-seeing KL",
      movie5: "Sight-seeing KL",
      movie6: "Sight-seeing KL",
      movie7: "Sight-seeing KL",
    }
  }

}
