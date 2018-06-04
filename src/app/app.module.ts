import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductComponentComponent } from './component/product-component/product-component.component';
import {appRoutes} from './app.routes';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {MatIconModule} from '@angular/material';
import {ProductDetailResolver} from './shared/product-detail.resolver';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import {OrderService} from './shared/order.service';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ProductPageComponent,
    ProductComponentComponent,
    ProductDetailComponent,
    AboutPageComponent,
    WelcomePageComponent,
    ServicesPageComponent,
    ShoppingCartComponent,
    ShoppingCartPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    // BrowserModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    ProductDetailResolver,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
