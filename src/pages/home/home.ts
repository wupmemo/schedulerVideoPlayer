import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPlayer ,VideoOptions } from '@ionic-native/video-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

videoOpts : VideoOptions ;

constructor(public navCtrl: NavController,private videoPlayer : VideoPlayer) {

}

public playVideo(){
  this.videoOpts = {volume : 1.0};
  this.videoPlayer.play('res/kl.mp4').then(() => {
    console.log('video completed');
  }).catch(err => {
    console.log(err);
  });
}
public stopPlayingVideo(){
  this.videoPlayer.close();
}

}
