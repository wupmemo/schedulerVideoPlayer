import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import schedule from 'node-schedule'
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
    console.log('constructor method is called.');
  }


  uploadVideo() {
    console.log('videos will now load');
  }

  addVideosToList() {
    console.log('adding video names to list');
  }

  playVideos() {
    //this function called only to play a specific video
  /* Global Variables used in all functions */
  // var daytime:any = document.getElementById('daytimeSelected')["value"];
  // var hours:any = document.getElementById('hoursSelected').value;
  // var minutes:any =document.getElementById('minutesSelected').value;

  // var hoursPM:any = parseInt(hours) + 12;
  // var rule = new schedule.RecurrenceRule();
  // var videoPlayer:any = document.getElementById("videoPlayer");
  /* end of global variables */

    /* Play video if daytime PM */
      // if (daytime=='PM') {
      //   rule.minute = minutes;
      //   rule.hour = hoursPM;
      //   console.log(hoursPM)
      //   schedule.scheduleJob(rule, function(){
      //     console.log('Videos are up now ...');
      //     videoPlayer.play();
      //   });
      // }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }
}


