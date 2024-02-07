import { Component, Input, Output } from '@angular/core';
import { ProductDto } from '../../core/models/products.dto';
import { ProductApiService } from '../../core/services/product-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass',
})
export class ProductsComponent {
  constructor(private apiProducts: ProductApiService) {}

  @Input() products?: Array<ProductDto>;
  @Input() totalPages: number | undefined;
  @Input() categories: string[] = [];
  @Input() selectedCategories: string[] = [];
  @Input() selectedSort: { key: string; type: string } = { key: '', type: '' };
  showCategories = false;

  filterProducts(categories: string[]) {
    this.selectedCategories = categories;
    this.updateProducts(this.selectedSort, categories);
  }

  sortProducts(sort: { key: string; type: string }) {
    this.selectedSort = sort;
    this.updateProducts(sort, this.selectedCategories);
  }

  updateProducts(sort: { key: string; type: string }, categories: string[]) {
    this.apiProducts
      .getProducts({ sort: sort, categories: categories })
      .subscribe((data) => {
        this.products = data.data.data;
        this.totalPages = data.data.total_pages;
      });
  }

  toggleCategories() {
    this.showCategories = !this.showCategories;
  }
}
