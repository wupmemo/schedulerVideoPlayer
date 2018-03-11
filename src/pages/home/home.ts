import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { VideoPlayer ,VideoOptions } from '@ionic-native/video-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

playin: any;
// videoOpts : VideoOptions ;

constructor(public navCtrl: NavController) {
  this.playin = 30000;
}

  PlayVideoTimer(playin){
    //playing video after a certain amount of time.
    alert("Now will play video after 5 seconds")
    setTimeout(function(){
      var videoPlayer:any = document.getElementById("videoPlayer");
      videoPlayer.play();
    }, playin);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}