import { BaseEntity } from 'src/BaseEntity/Entities/BaseEntity';
import { Type_Enrollment } from '../Enums/Types_enum';

import {
  Column,
  Entity,
  ManyToOne
} from 'typeorm';
import { Section } from 'src/Section/Entities/Section';
import { Person } from 'src/Person/Entities/Person';

@Entity()
export class Enrollment extends BaseEntity {
  @Column({ type: 'varchar', length: 255})
  type: string;

  @ManyToOne(() => Section, (section) => section.getId)
  section: number; //id de la seccion inscrita

  @ManyToOne(() => Person, (person) => person.getId)
  person: number;
}
