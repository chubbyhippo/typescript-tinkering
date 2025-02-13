import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePetCommand } from './commands/create-pet.command';
import { CreatePetDto } from './dto/create-pet-dto';
import { GetAllPetsQuery } from './queries/get-all-pets.query';
import { GetAllPetsPaginationQuery } from './queries/get-all-pets-pagination.query';
import { GetAllPetsRawSqlQuery } from './queries/get-all-pets-raw-sql.query';
import { ApiQuery } from '@nestjs/swagger';

@Controller('pets')
export class PetsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly qeuryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    const { name, categoryId } = createPetDto;
    return this.commandBus.execute(new CreatePetCommand(name, categoryId));
  }

  @Get()
  async getAllPets() {
    return this.qeuryBus.execute(new GetAllPetsQuery());
  }

  @Get('pagination')
  @ApiQuery({name: 'page', required: false})
  @ApiQuery({name: 'limit', required: false})
  async getAllPetsPagination(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.qeuryBus.execute(new GetAllPetsPaginationQuery(page, limit));
  }

  @Get('rawSql')
  async getAllPetsRawSql() {
    return this.qeuryBus.execute(new GetAllPetsRawSqlQuery());
  }
}
