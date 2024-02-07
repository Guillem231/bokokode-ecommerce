import { Component, Input } from '@angular/core';
import { ProductDto } from '../../core/models/products.dto';
import { ProductApiService } from '../../core/services/product-api.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.sass',
})
export class ListProductsComponent {
  constructor(private apiProducts: ProductApiService) {}

  @Input() products: ProductDto[] | undefined;
  @Input() totalPages: number | undefined;
  @Input() selectedCategories: string[] = [];
  @Input() selectedSort: { key: string; type: string } = { key: '', type: '' };
  currentPage = 1;

  changePage(page: number) {
    this.apiProducts
      .getProducts({
        page: page,
        categories: this.selectedCategories,
        sort: this.selectedSort,
      })
      .subscribe((data) => {
        this.products = data.data.data;
      });
    this.currentPage = page;
  }
}
