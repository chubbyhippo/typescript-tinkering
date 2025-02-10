import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { PetEntity } from '../pet.entity';
import { Repository } from 'typeorm';
import { GetAllPetsQuery } from './get-all-pets.query';

@QueryHandler(GetAllPetsQuery)
export class GetAllPetsHandler implements IQueryHandler<GetAllPetsQuery> {
  constructor(
    @InjectRepository(PetEntity)
    private readonly petEntityRepository: Repository<PetEntity>,
  ) {}
  execute(): Promise<PetEntity[]> {
    return this.petEntityRepository.find({ relations: ['category'] });
  }
}
