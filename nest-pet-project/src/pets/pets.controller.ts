import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePetCommand } from './commands/create-pet.command';
import { CreatePetDto } from './dto/create-pet-dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    const { name, categoryId } = createPetDto;
    return this.commandBus.execute(new CreatePetCommand(name, categoryId));
  }
}
