import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductApiService } from '../../core/services/product-api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.sass',
})
export class PaginationComponent {
  constructor() {
    this.totalPages = 0;
    this.currentPage = 0;
  }
  @Input() totalPages: number | undefined;
  @Input() currentPage: number;
  @Output() pageChange = new EventEmitter<number>();

  previousPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages!) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }
}
