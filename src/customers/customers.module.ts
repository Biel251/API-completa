import { Module } from '@nestjs/common';
import { CustomersService } from './CustomersService';
import { CustomersController } from 'src/customers/customers.controller';

@Module({
  providers: [CustomersService],
  controllers: [CustomersController],
})
export class CustomersModule {}
