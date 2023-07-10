import { EntityClass } from 'src/Entity/Entities/Entity';
import {
  Column,
  Entity
} from 'typeorm';

@Entity()
export class School extends EntityClass {

  @Column({type: 'integer'})
  private faculties: number[];

  @Column({type: 'integer'})
  private sections: number[];
}
