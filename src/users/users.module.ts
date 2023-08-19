import { Module } from '@nestjs/common';

import { CustomersController } from './customers/controllers/customers.controller';
import { CustomersService } from './customers/services/customers.service';
import { UsersController } from './users/controllers/users.controller';
import { UsersService } from './users/services/users.service';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [CustomersController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
