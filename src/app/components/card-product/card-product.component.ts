import { Component, Input } from '@angular/core';
import { ImageDto } from '../../core/models/image.dto';
import { ProductDto } from '../../core/models/products.dto';
import { CartService } from '../../core/services/cart-service.service';
import { CurrencyService } from '../../core/services/currency.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.sass'],
})
export class CardProductComponent {
  @Input() product: ProductDto | undefined;

  constructor(
    private cartService: CartService,
    private currencyService: CurrencyService
  ) {}

  addToCart(product: ProductDto) {
    this.cartService.addToCart(product);
    this.cartService.openCart();
  }

  getCurrencySymbol(currency: string) {
    return this.currencyService.getCurrencySymbol(currency);
  }
}
