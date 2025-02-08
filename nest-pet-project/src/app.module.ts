import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { PetsModule } from './pets/pets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetEntity } from './pets/pet.entity';
import { CategoryEntity } from './categories/category.entity';

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
