import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    quantity: Number,
    price: Number,
  },
  {
    collection: 'product',
    read: 'nearest'
  }
);
