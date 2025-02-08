import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from 'src/categories/category.entity';

@Entity()
export class PetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => CategoryEntity, (category) => category.pets)
  category: CategoryEntity;
}
