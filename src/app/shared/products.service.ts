import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [];

  product =
    {
      title: 'Iphone',
      bigImage: 'http://digitalspyuk.cdnds.net/16/38/980x490/landscape-1474299046-p2980155.JPG',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a leo aliquam, laoreet nisl vitae, varius nisi. Donec sit amet ullamcorper justo, eu ultrices lacus. Duis sollicitudin turpis nisi, id pharetra turpis fringilla non. Sed hendrerit fringilla augue id hendrerit. Quisque maximus nulla turpis, eget lacinia justo eleifend id. Suspendisse sollicitudin tortor eget neque tristique posuere. Quisque erat elit, consectetur sed arcu vel, interdum semper massa. Nunc ex leo, mattis nec tellus ac, ultricies rutrum urna. Suspendisse scelerisque congue ligula, id iaculis orci. Morbi ultricies ante vel dolor egestas mattis.',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a leo aliquam, laoreet nisl vitae, varius nisi. Donec sit amet ullamcorper justo, eu ultrices lacus. Duis sollicitudin turpis nisi, id pharetra turpis fringilla non. Sed hendrerit fringilla augue id hendrerit. Quisque maximus nulla turpis, eget lacinia justo eleifend id. Suspendisse sollicitudin tortor eget neque tristique posuere. Quisque erat elit, consectetur sed arcu vel, interdum semper massa. Nunc ex leo, mattis nec tellus ac, ultricies rutrum urna. Suspendisse scelerisque congue ligula, id iaculis orci. Morbi ultricies ante vel dolor egestas mattis.',
      img: 'https://i.ytimg.com/vi/ImFr7d0hodk/hqdefault.jpg',
      rating: 3
    }

  constructor() {
    for (let id = 0; id < 15; id++) {
      this.products.push({...this.product, id});
    }
  }

  getProducts() {
    return of(this.products);
  }

  getProductById(id) {
    console.log(this.products, id);
    const found = (this.products.find(product => product.id == id));
    console.log('found ', found);
    return of(found);
  }
}
