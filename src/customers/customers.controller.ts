
// src/customers/customers.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/create-customer.dto';
import { CustomersService } from './CustomersService';


@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get() 
  findAll() {
    return this.customersService.findAll();
  }

  @Post() 
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Put(':id') 
  update(@Param('id') id: string, @Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.update(id, createCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }
}
