import { Body, Controller, Get, Post, Put, Delete, Query } from '@nestjs/common';

import { ProductsService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FindOneDto } from './dto/find-product.dto';
import { Product } from './interfaces/product.interface';

@Controller('Products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    this.ProductsService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.ProductsService.findAll();
  }

  @Get('findone')
  async find(@Query() query: FindOneDto): Promise<Product[]> {
    return this.ProductsService.find(query);
  }

  @Put()
  async update(@Body() updateProductDto: CreateProductDto) {
    this.ProductsService.update(updateProductDto)
  }

  @Delete()
  async delete(@Body() deleteProductDto: CreateProductDto) {
    this.ProductsService.delete(deleteProductDto)
  }
}
