import { EntityClass } from 'src/Entity/Entities/Entity';
import { School } from 'src/School/Entities/School';
import { Entity, ManyToOne } from 'typeorm';

@Entity()
export class Faculty extends EntityClass {
  @ManyToOne(() => School, (school) => school.id)
  private school: number; //Id de la escuela de la facultad
}
