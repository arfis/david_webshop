import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../shared/order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  orders;
  constructor(private _orderService: OrderService) {
    this._orderService.orderEmitter.subscribe(
      result => {
        this.orders = this._orderService.inCart;
        console.log('here', this.orders);
      }
    );
  }

  ngOnInit() {
    this._orderService.orderEmitter.subscribe(
      result => {
        this.orders = this._orderService.inCart;
        console.log('here', this.orders);
      }
    );
  }

}
