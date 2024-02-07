import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductDto } from '../models/products.dto';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cart = new BehaviorSubject<ProductDto[]>([]);
  public readonly cart$ = this._cart.asObservable();

  private _cartVisible = new BehaviorSubject<boolean>(false);
  public readonly cartVisible$ = this._cartVisible.asObservable();

  addToCart(product: ProductDto) {
    this._cart.next([...this._cart.value, product]);
  }

  removeProduct(product: ProductDto) {
    const updatedCart = this._cart.value.filter((item) => item !== product);
    this._cart.next(updatedCart);
  }

  openCart() {
    this._cartVisible.next(true);
  }

  closeCart() {
    this._cartVisible.next(false);
    this._cart.next([]);
  }
}
