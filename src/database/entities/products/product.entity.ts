import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  //CreateDateColumn,
  //UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  Index,
  JoinColumn,
  JoinTable,
} from 'typeorm';

import { Brand } from './brand.entity';
import { Category } from './category.entity';

@Entity({ name: 'products' })
@Index(['price', 'stock'])
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToOne(() => Brand, (brand) => brand.products)
  @JoinColumn({ name: 'brand_id' })
  brand: Brand;

  @ManyToMany(() => Category, (category) => category.products, {
    nullable: true,
  })
  @JoinTable({
    name: 'products_categories',
    joinColumn: {
      name: 'product_id', // Relación con la entidad donde estas situado.
    },
    inverseJoinColumn: {
      name: 'category_id', // Relación con la otra entidad.
    },
  })
  categories: Category[];
}
