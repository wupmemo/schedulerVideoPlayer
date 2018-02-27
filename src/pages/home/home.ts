import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { VideoPlayer ,VideoOptions } from '@ionic-native/video-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

// videoOpts : VideoOptions ;

constructor(public navCtrl: NavController) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
    setTimeout(function(){
    document.getElementById("videoPlayer").play();
    }, 5000);
  }

}
