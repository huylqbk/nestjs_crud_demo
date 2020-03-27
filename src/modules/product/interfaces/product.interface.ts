import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly quantity: number;
  readonly price: number;
}
