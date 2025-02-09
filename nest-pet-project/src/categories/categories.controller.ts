import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCategoryCommand } from './commands/create-category.command';
import { CreateCategoryDto } from './dto/create-category-dto';
import { GetAllCategoriesQuery } from './queries/get-all-categories.query';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.commandBus.execute(
      new CreateCategoryCommand(createCategoryDto.name),
    );
  }

  @Get()
  async getAllCategories() {
    return this.queryBus.execute(new GetAllCategoriesQuery());
  }
}
