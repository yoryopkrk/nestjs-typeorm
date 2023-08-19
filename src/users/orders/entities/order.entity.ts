import { User } from '../../users/entities/user.entity';
import { Product } from '../../../products/products/entities/product.entity';

export class Order {
  date: Date;
  user: User;
  products: Product[];
}
