import {Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './create-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }
  @Get(':id')
  findOne(@Param ('id', ParseIntPipe) id: number){
    return this.employeeService.findOne(id);
  }

@Post()
  create(@Body() dto: CreateEmployeeDto) {
    return this.employeeService.create(dto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.remove(id);
  }
}



