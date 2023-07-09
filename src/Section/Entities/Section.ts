import { EntityClass } from 'src/Entity/Entities/Entity';
import { Type_School } from '../Enums/Types_enum_school';
import {
  Column,
  Entity,
  ManyToOne
} from 'typeorm';
import { School } from 'src/School/Entities/School';

@Entity()
export class Section extends EntityClass {

  @Column({type: 'number'})
  private uc: number;

  @Column({type: 'number'})
  private semester: number;

  @Column({type: 'varchar', length: 255})
  private type: Type_School;

  @Column({type: 'number'})
  private th: number; // en el diagrama estos atributos estaban en español, los puse en ingles xd

  @Column({type: 'number'})
  private ph: number;

  @Column({type: 'number'})
  private lh: number;

  @ManyToOne(() => School, (school) => school.getId)
  private school: number;
}
