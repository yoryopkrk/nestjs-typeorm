import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepo.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepo.findOne({ where: { id: id } });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async create(data: CreateProductDto) {
    const newProduct = this.productRepo.create(data);
    return await this.productRepo.save(newProduct);
  }

  async update(id: number, changes: UpdateProductDto) {
    const product = await this.findOne(id);
    this.productRepo.merge(product, changes);
    return await this.productRepo.save(product);
  }

  async delete(id: number) {
    const product = await this.findOne(id);

    if (product) {
      return await this.productRepo.delete(id);
    }

    return false;
  }
}
