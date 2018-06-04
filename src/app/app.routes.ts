import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ProductPageComponent} from './pages/product-page/product-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {ProductDetailComponent} from './component/product-detail/product-detail.component';
import {WelcomePageComponent} from './pages/welcome-page/welcome-page.component';
import {ServicesPageComponent} from './pages/services-page/services-page.component';
import {ProductDetailResolver} from './shared/product-detail.resolver';
import {ShoppingCartPageComponent} from './pages/shopping-cart-page/shopping-cart-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'products',
        component: ProductPageComponent,
      },
      {
        path: 'products/:id',
        resolve: {
          product: ProductDetailResolver
        },
        component: ProductDetailComponent
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'services',
        component: ServicesPageComponent,
      },
      {
        path: 'cart',
        component: ShoppingCartPageComponent,
      },
      {
        path: '',
        component: WelcomePageComponent
      }
    ]
    // data: { title: 'Heroes List' }
  },
  { path: '**', component: PageNotFoundComponent }
];
