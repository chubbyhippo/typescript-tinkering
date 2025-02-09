import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { CategoryEntity } from './categories/category.entity';
import { PetEntity } from './pets/pet.entity';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'mydatabase',
      entities: [PetEntity, CategoryEntity],
      synchronize: true, // Set to false in production
    }),
    PetsModule,
    CategoriesModule,
  ],
})
export class AppModule {}
