import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetEntity } from './pet.entity';
import { CategoryEntity } from 'src/categories/category.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { CreatePetHandler } from './commands/create-pet.handler';
import { GetAllPetsHandler } from './queries/get-all-pets.handler';
import { GetAllPetsPaginationHandler } from './queries/get-all-pets-pagination.handler';

@Module({
  imports: [TypeOrmModule.forFeature([PetEntity, CategoryEntity]), CqrsModule],
  controllers: [PetsController],
  providers: [CreatePetHandler, GetAllPetsHandler, GetAllPetsPaginationHandler],
})
export class PetsModule {}
