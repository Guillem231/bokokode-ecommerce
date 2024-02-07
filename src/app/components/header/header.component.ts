import { Component } from '@angular/core';
import { ProductDto } from '../../core/models/products.dto';
import { CartService } from '../../core/services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  productsInCart: ProductDto[] = [];
  cartVisible: boolean = false;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe((products) => {
      this.productsInCart = products;
    });
    this.cartService.cartVisible$.subscribe((visible) => {
      this.cartVisible = visible;
    });
  }

  openCart() {
    this.cartService.openCart();
  }
  clearCart() {
    this.cartService.closeCart();
  }
}
