import {Component, HostBinding, OnInit} from '@angular/core';
import {slideInDownAnimation} from '../../app.animations';
import {Router} from '@angular/router';
import {ProductsService} from '../../shared/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  animations: [ slideInDownAnimation ]
})
export class ProductPageComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  products;

  constructor(private router: Router,
              private _productService: ProductsService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(
      result => this.products = result
    )
  }

  redirect(id) {
    this.router.navigate(['products', id]);
  }

}
