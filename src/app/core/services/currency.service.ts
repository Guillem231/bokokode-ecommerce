import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor() {}

  getCurrencySymbol(currency: string) {
    switch (currency) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      default:
        return '';
    }
  }
}
