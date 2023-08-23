import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsController } from './products/controllers/products.controller';
import { CategoriesController } from './categories/controllers/categories.controller';
import { BrandsController } from './brands/controllers/brands.controller';
import { ProductsService } from './products/services/products.service';
import { CategoriesService } from './categories/services/categories.service';
import { BrandsService } from './brands/services/brands.service';
import { Product } from './products/entities/product.entity';
import { Brand } from './brands/entities/brand.entity';
import { Category } from './categories/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Brand, Category])],
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [ProductsService, BrandsService, CategoriesService],
  exports: [ProductsService, TypeOrmModule],
})
export class ProductsModule {}
