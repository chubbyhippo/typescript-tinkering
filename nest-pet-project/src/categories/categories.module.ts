import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CategoriesController } from './categories.controller';
import { CreateCategoryHandler } from './commands/create-category.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { GetAllCategoriesHandler } from './queries/get-all-categories.handler';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity]), CqrsModule],
  providers: [CreateCategoryHandler, GetAllCategoriesHandler],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
