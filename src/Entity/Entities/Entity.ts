import { BaseEntity } from 'src/BaseEntity/Entities/BaseEntity';
import {
  Column,
  Entity
} from 'typeorm';

@Entity()
export abstract class EntityClass extends BaseEntity {
  @Column({ type: 'varchar', length: 255})
  name: string;

  @Column({ type: 'varchar', length: 255})
  description: string;
}
