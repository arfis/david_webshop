import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {subscribeOn} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  inCart = [];
  orderEmitter = new Subject<any>();

  constructor() {
    this.orderEmitter.subscribe(
      item => {
        console.log('adding to cart');
        this.inCart.push(item);
      }
    )
  }
}
