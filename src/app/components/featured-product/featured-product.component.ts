import { Component, Input } from '@angular/core';
import { ProductDto } from '../../core/models/products.dto';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.sass'],
})
export class FeaturedProductComponent {
  @Input() product: ProductDto | undefined;
}
