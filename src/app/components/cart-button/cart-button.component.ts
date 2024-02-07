import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDto } from '../../core/models/products.dto';
import { CartService } from '../../core/services/cart-service.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.sass',
})
export class CartButtonComponent {
  @Input() product: ProductDto | undefined;
  @Output() addToCart = new EventEmitter<ProductDto>();

  constructor(private cartService: CartService) {}

  onAddToCart(product: ProductDto) {
    this.cartService.addToCart(product);
    this.cartService.openCart();
    this.addToCart.emit(product);
  }
}
