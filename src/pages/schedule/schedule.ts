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

    var daytime:any = document.getElementById('daytimeSelected')["value"];
    var hours:any = document.getElementById('hoursSelected')["value"];
    var minutes:any =document.getElementById('minutesSelected')["value"];
    var hoursPM:any = parseInt(hours) + 12;
    var rule = new schedule.RecurrenceRule();
    var videos:any = document.getElementById('videos')["value"];
    var videoPlayer:any = document.getElementById("videoPlayer");
    var videoPlayer2:any = document.getElementById("videoPlayer2");
    alert("Now will be playing video at" + " " + hours +":" + minutes);

    // Play video if daytime AM
      if (daytime=='AM') {
        rule.minute = minutes;
        rule.hour = hours;
        schedule.scheduleJob(rule, function(){
          if (videos=='video1'){
            videoPlayer.style.display = "block";
            videoPlayer2.style.display = "none";
            videoPlayer.play();
          }
          if (videos=='video2'){
            videoPlayer.style.display = "none";
            videoPlayer2.style.display = "block";
            videoPlayer2.play();
          }
        });
      }

    // Play video if daytime PM
      if (daytime=='PM') {
        rule.minute = minutes;
        rule.hour = hoursPM;
        schedule.scheduleJob(rule, function(){
          if (videos=='video1'){
            videoPlayer.style.display = "block";
            videoPlayer2.style.display = "none";
            videoPlayer.play();
          }
          if (videos=='video2'){
            videoPlayer.style.display = "none";
            videoPlayer2.style.display = "block";
            videoPlayer2.play();
          }
        });
      }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }
}


