import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit() {
  }

  get title() {
    return this.product.title;
  }

  get description() {
    return this.product.description;
  }

  get image() {
    return this.product.img;
  }

  get rating() {
    return this.product.rating;
  }
}
