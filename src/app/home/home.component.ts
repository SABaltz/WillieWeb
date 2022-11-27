import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {DataService} from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count:number;
  subscription: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentNumber.subscribe(number => this.count = number)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newNumber() {
    this.count ++
    this.data.updateCount(this.count)
  }

}
