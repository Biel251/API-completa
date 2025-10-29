import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './create-customer.dto'; 


export interface Customer {
  id: string;
  name: string;
  email: string;
}

@Injectable()
export class CustomersService {
 private customers: Customer[] = [
  { id: '1', name: 'João', email: 'joao@example.com' },
  { id: '2', name: 'Mari', email: 'mari@example.com' },
];

  
  findAll(): Customer[] {
    return this.customers;
  }

  
  create(createCustomerDto: CreateCustomerDto): Customer {
    const customer: Customer = {
      id: (this.customers.length + 1).toString(),
      ...createCustomerDto,
    };
    this.customers.push(customer);
    return customer;
  }


  update(id: string, createCustomerDto: CreateCustomerDto): Customer | null {
    const customer = this.customers.find((cust) => cust.id === id);
    if (customer) {
      customer.name = createCustomerDto.name;
      customer.email = createCustomerDto.email;
      return customer;
    }
    return null; 
  }


  remove(id: string): boolean {
    const index = this.customers.findIndex((cust) => cust.id === id);
    if (index !== -1) {
      this.customers.splice(index, 1);
      return true;
    }
    return false;
  }
}
