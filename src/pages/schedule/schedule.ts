import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Storage } from '@ionic/storage';

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

  playVideos(){
    //playing video after a certain of time.
    console.log('You selected the following time to play video:');
    var hours = (document.getElementById('hoursSelected').value);
    var minutes = (document.getElementById('minutesSelected').value);
    var daytime = (document.getElementById('daytimeSelected').value);
    if (daytime=='PM') {
        console.log('now playing PM');
    }
    var playtime = hours +':'+ minutes;
    console.log(playtime);

    // var videoPlayer:any = document.getElementById("videoPlayer");
    // videoPlayer.play();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }
}


