import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {DataService} from "../data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  count:number;
  subscription: Subscription;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.currentNumber.subscribe(count => this.count = count)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
