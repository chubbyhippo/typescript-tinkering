import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PetEntity } from '../pets/pet.entity';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => PetEntity, (pet) => pet.category)
  pets: PetEntity[];
}
