import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private numberSource = new BehaviorSubject(0);
  currentNumber = this.numberSource.asObservable();

  updateCount(count: number) {
    this.numberSource.next(count)
  }

  constructor() {
  }
}
