import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs';
import { map, take }              from 'rxjs/operators';
import {ProductsService} from './products.service';


@Injectable()
export class ProductDetailResolver implements Resolve<any> {
  constructor(private _productService: ProductsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const id = route.paramMap.get('id');

    return this._productService.getProductById(id).pipe(
      take(1),
      map(crisis => {
        if (crisis) {
          console.log('log found ', crisis);
          return crisis;
        } else { // id not found
          this.router.navigate(['/products']);
          return null;
        }
      })
    );
  }
}
