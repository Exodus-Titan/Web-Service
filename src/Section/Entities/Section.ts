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

  @Column({type: 'integer'})
  private uc: number;

  @Column({type: 'integer'})
  private semester: number;

  @Column({type: 'varchar', length: 255})
  private type: Type_School;

  @Column({type: 'float'})
  private th: number; // en el diagrama estos atributos estaban en español, los puse en ingles xd

  @Column({type: 'float'})
  private ph: number;

  @Column({type: 'float'})
  private lh: number;

  @ManyToOne(() => School, (school) => school.getId)
  private school: number;
}
