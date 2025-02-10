import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetEntity } from './pet.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { CreatePetHandler } from './commands/create-pet.handler';
import { GetAllPetsHandler } from './queries/get-all-pets.handler';
import { GetAllPetsPaginationHandler } from './queries/get-all-pets-pagination.handler';
import { GetAllPetsRawSqlHandler } from './queries/get-all-pets-raw-sql.handler';
import { CategoryEntity } from '../categories/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PetEntity, CategoryEntity]), CqrsModule],
  controllers: [PetsController],
  providers: [
    CreatePetHandler,
    GetAllPetsHandler,
    GetAllPetsPaginationHandler,
    GetAllPetsRawSqlHandler,
  ],
})
export class PetsModule {}
