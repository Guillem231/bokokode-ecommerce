import { NgModule } from '@angular/core';

import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { HeaderComponent } from './components/header/header.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { CartPopupComponent } from './components/cart-popup/cart-popup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartButtonComponent } from './components/cart-button/cart-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsComponent,
    HeaderComponent,
    FeaturedProductComponent,
    ListProductsComponent,
    CategoryComponent,
    CardProductComponent,
    PaginationComponent,
    SortByComponent,
    CartPopupComponent,
    CartButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCheckboxModule,
    FontAwesomeModule,
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
