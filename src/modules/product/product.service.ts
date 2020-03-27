import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { FindOneDto } from './dto/find-product.dto';


@Component()
export class ProductsService {
  constructor(
    @Inject('ProductModelToken') private readonly ProductModel: Model<Product>
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.ProductModel(createProductDto);
    return await createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.ProductModel.find().exec();
  }

  async find(query: FindOneDto): Promise<Product[]> {
    return await this.ProductModel.find(query).exec();
  }

  async update(updateProductDto: CreateProductDto): Promise<Product> {
    const updateProduct = new this.ProductModel(updateProductDto);
    return await updateProduct.save();
  }

  async delete(deleteProductDto: CreateProductDto): Promise<Product> {
    const deleteProduct = new this.ProductModel(deleteProductDto);
    return await deleteProduct.remove();
  }

}
