import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { ProductsController } from './product.controller';
import { ProductsProviders } from './product.providers';
import { ProductsService } from './product.service';

@Module({
  modules: [DatabaseModule],
  controllers: [ProductsController],
  components: [ProductsService, ...ProductsProviders]
})
export class ProductsModule {}
