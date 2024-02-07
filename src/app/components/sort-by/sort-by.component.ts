import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.sass'],
})
export class SortByComponent {
  @Output() sortChange = new EventEmitter<{ key: string; type: string }>();
  sortOptions = [
    { label: 'None', value: { key: '', type: '' } },
    { label: 'Price: Ascendent', value: { key: 'price', type: 'ASC' } },
    { label: 'Price: Descendent', value: { key: 'price', type: 'DESC' } },
    { label: 'Names: A-Z', value: { key: 'name', type: 'ASC' } },
    { label: 'Names: Z-A', value: { key: 'name', type: 'DESC' } },
  ];
  onSortChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const sortString = target.value;
    const sort = JSON.parse(sortString);
    this.sortChange.emit(sort);
  }
}
