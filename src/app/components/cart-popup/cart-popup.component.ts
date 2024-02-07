import { Component } from '@angular/core';
import { ProductDto } from '../../core/models/products.dto';
import { CartService } from '../../core/services/cart-service.service';
import { CurrencyService } from '../../core/services/currency.service';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.sass'],
})
export class CartPopupComponent {
  productsInCart: ProductDto[] = [];
  cartVisible: boolean = false;

  constructor(
    private cartService: CartService,
    private currencyService: CurrencyService
  ) {
    this.cartService.cart$.subscribe((products) => {
      this.productsInCart = products;
    });
    this.cartService.cartVisible$.subscribe((visible) => {
      this.cartVisible = visible;
    });
  }

  closeCart() {
    this.cartVisible = false;
  }

  clearCart() {
    this.cartService.closeCart();
  }
  getCurrencySymbol(currency: string) {
    return this.currencyService.getCurrencySymbol(currency);
  }
}
