import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ProductsService } from 'src/products/products/services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' })
  getAll() {
    return this.productsService.findAll();
  }
  // getAll(
  //   @Query('limit') limit = 100,
  //   @Query('offset') offset = 0,
  //   @Query('brand') brand: string,
  // ) {
  //   return this.productsService.findAll();
  // }

  @Get('filter')
  getFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: string) {
    return this.productsService.delete(+id);
  }
}
