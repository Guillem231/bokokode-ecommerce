import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from '../../../environments/environment';
import { ProductsResponseDto } from '../models/products-response.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private http: HttpClient) {}

  getProducts({
    page,
    categories,
    sort,
  }: {
    page?: number;
    categories?: string[];
    sort?: { key: string; type: string };
  }): Observable<ProductsResponseDto> {
    let requestBody = {};
    let params;
    if (page) {
      params = new HttpParams().set('page', page.toString());
    }

    if (categories && categories.length) {
      requestBody = { categories };
    }

    if (sort) {
      requestBody = {
        ...requestBody,
        sort: sort,
      };
    }

    return this.http.post<ProductsResponseDto>(`${env.api}`, requestBody, {
      params,
    });
  }
}
