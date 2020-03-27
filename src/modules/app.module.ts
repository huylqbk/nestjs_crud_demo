import { Module } from '@nestjs/common';

import { ProductsModule } from './product/product.module';

@Module({
    modules: [ProductsModule],
})
export class ApplicationModule {}