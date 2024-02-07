import { ImageDto } from './image.dto';

export interface ProductDto {
  _id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: ImageDto;
  bestseller: boolean;
  featured: boolean;
  description: string;
  people_also_buy: ProductDto[];
  updated_at: string;
  created_at: string;
}
