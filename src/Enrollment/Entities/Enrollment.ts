import { BaseEntity } from 'src/BaseEntity/Entities/BaseEntity';
import { Type_Enrollment } from '../Enums/Types_enum';

import {
  Column,
  Entity,
  ManyToOne
} from 'typeorm';
import { Section } from 'src/Section/Entities/Section';

@Entity()
export class Enrollment extends BaseEntity {
  @Column({ type: 'varchar', length: 255})
  private type: Type_Enrollment;

  @ManyToOne(() => Section, (section) => section.getId)
  private section: number; //id de la seccion inscrita
}
