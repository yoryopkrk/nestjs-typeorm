import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `orders limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get('filter')
  getFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get(':orderId')
  getOne(@Param('orderId') orderId: string) {
    return {
      message: `order ${orderId}`,
    };
  }

  @Post() // 👈 New decorator
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
