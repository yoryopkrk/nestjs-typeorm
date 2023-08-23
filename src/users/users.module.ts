import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Customer } from './customers/entities/customer.entity';
import { CustomersController } from './customers/controllers/customers.controller';
import { CustomersService } from './customers/services/customers.service';
import { User } from './users/entities/user.entity';
import { UsersController } from './users/controllers/users.controller';
import { UsersService } from './users/services/users.service';
import { Order } from './orders/entities/order.entity';
import { OrdersController } from './orders/controllers/orders.controller';
import { OrdersService } from './orders/services/orders.service';
import { OrderItem } from './orders/entities/order-item.entity';
import { OrderItemService } from './orders/services/order-item.service';
import { OrderItemController } from './orders/controllers/order-item.controller';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Customer, Order, OrderItem]), ProductsModule],
  controllers: [CustomersController, UsersController, OrdersController, OrderItemController],
  providers: [CustomersService, UsersService, OrdersService, OrderItemService],
  exports: [],
})
export class UsersModule {}
