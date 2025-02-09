import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePetCommand } from './commands/create-pet.command';
import { CreatePetDto } from './dto/create-pet-dto';
import { GetAllPetsQuery } from './queries/get-all-pets.query';

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
}
