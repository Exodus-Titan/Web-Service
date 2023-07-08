import { type } from 'os';
import { EntityClass } from 'src/Entity/Entities/Entity';
import {
  Column,
  Entity
} from 'typeorm';

@Entity()
export class School extends EntityClass {
  @Column({type: 'number'})
  private faculties: number[];

  @Column({type: 'number'})
  private sections: number[];
}
