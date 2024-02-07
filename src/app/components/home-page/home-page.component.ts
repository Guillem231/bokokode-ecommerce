import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, first, firstValueFrom } from 'rxjs';
import { ProductApiService } from '../../core/services/product-api.service';
import { ProductDto } from '../../core/models/products.dto';
import { ProductsResponseDto } from '../../core/models/products-response.dto';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  public products: ProductDto[] = [];
  public totalProducts = 0;
  public featuredProduct: ProductDto | undefined;
  public loading = true;
  public totalPages = 0;
  public categories: string[] = [];

  private productsSub!: Subscription;

  constructor(private productService: ProductApiService) {}

  ngOnInit(): void {
    this.getProducts(1);
  }

  async getProducts(page: number): Promise<void> {
    if (this.productsSub) {
      this.productsSub.unsubscribe();
    }

    try {
      this.loading = true;
      const response = await firstValueFrom(
        this.productService.getProducts({ page: page })
      );

      if (response && response.data) {
        this.products = response.data.data;
        this.totalProducts = response.data.total;
        this.totalPages = response.data.total_pages;
        this.categories = response.data.total_categories;

        if (!this.featuredProduct) {
          this.featuredProduct = this.products.find((p) => p.featured);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      this.loading = false;
    }
  }

  ngOnDestroy(): void {
    if (this.productsSub) {
      this.productsSub.unsubscribe();
    }
  }
}
