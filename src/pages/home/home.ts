import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

playin: any;

constructor(public navCtrl: NavController) {
  this.playin = 50000;
}

  // PlayVideoTimer(playin){
  //   //playing video after a certain amount of time.
  //   alert("Now will play video.")
  //   setTimeout(function(){
  //     var videoPlayer:any = document.getElementById("videoPlayer");
  //     videoPlayer.play();
  //   }, playin);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}