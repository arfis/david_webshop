import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../shared/order.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productDetail;

  constructor(private route: ActivatedRoute,
              private _orderService: OrderService) { }

  ngOnInit() {
    console.log('test');
    this.route.data
      .subscribe((data) => {
        this.productDetail = data.product;

        console.log(this.productDetail);
      });
  }

  addToOrder() {
    console.log('adding');
    this._orderService.orderEmitter.next(this.productDetail);
  }

  get id() {
    return this.productDetail.id;
  }

  get title() {
    return this.productDetail.title;
  }

  get description() {
    return this.productDetail.longDescription;
  }

  get image() {
    return this.productDetail.bigImage;
  }
}
