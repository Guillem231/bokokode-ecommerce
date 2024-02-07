import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass'],
})
export class CategoryComponent {
  @Input() categoryList: string[] = [];
  @Output() categoryChange = new EventEmitter<string[]>();

  selectedCategories: string[] = [];

  onCategoryChange(category: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedCategories.push(category);
    } else {
      const index = this.selectedCategories.indexOf(category);
      if (index !== -1) {
        this.selectedCategories.splice(index, 1);
      }
    }

    this.categoryChange.emit(this.selectedCategories);
  }
}
