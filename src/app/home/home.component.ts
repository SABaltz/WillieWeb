import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DataService} from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  audio: any;

  count: number;
  subscription: Subscription;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.subscription = this.data.currentNumber.subscribe(number => this.count = number)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newNumber() {
    this.count++
    this.data.updateCount(this.count)
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../assets/Snare1a.mp3";
    if (this.count == 1) {
      audio.src = "../assets/Snare1a.mp3";
    } else if (this.count == 2) {
      audio.src = "../assets/Snare2a.mp3";
    } else if (this.count == 3) {
      audio.src = "../assets/Snare3a.mp3";
    } else if (this.count == 4) {
      audio.src = "../assets/Snare4a.mp3";
    } else if (this.count == 5) {
      audio.src = "../assets/Snare6a.mp3";
    } else if (this.count == 6) {
      audio.src = "../assets/Breaking.mp3";
    }
    audio.load();
    audio.play();
  }
}
