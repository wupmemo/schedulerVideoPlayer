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
  }

  playVideos() {
    var daytime:any = <HTMLInputElement>(document.getElementById('daytimeSelected')).value;
    var hours:any = <HTMLInputElement>(document.getElementById('hoursSelected')).value;
    var minutes:any =<HTMLInputElement>(document.getElementById('minutesSelected')).value;
    var hoursPM:any = parseInt(hours) + 12;
    var rule = new schedule.RecurrenceRule();


    // Play video if daytime AM
    if (daytime=='AM') {
      console.log('Now daytime set to AM');
      rule.minute = minutes;
      rule.hour = hours;
      schedule.scheduleJob(rule, function(){
        console.log(rule);
        var videoPlayer:any = document.getElementById("videoPlayer");
        videoPlayer.play();
      });
    }

    // Play video if daytime PM
    if (daytime=='PM') {
      console.log('Now daytime set to PM');
      rule.minute = minutes;
      rule.hour = hoursPM;
      schedule.scheduleJob(rule, function(){
        var videoPlayer:any = document.getElementById("videoPlayer");
        videoPlayer.play();
      });
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }
}


