import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PetsModule } from './pets/pets.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [DatabaseModule, PetsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
