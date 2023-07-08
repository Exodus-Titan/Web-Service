import { BaseEntity } from 'src/BaseEntity/Entities/BaseEntity';
import { Enrollment } from 'src/Enrollment/Entities/Enrollment';
import {
  Entity,
  Column,
  ManyToOne
} from 'typeorm';

@Entity()
export class Person extends BaseEntity {
  @Column({ type: 'varchar', length: 255})
  private dni: string;

  @Column({ type: 'varchar', length: 255})
  private first_name: string;

  @Column({ type: 'varchar', length: 255})
  private last_name: string;

  @ManyToOne(() => Enrollment, (enrollment) => enrollment.getId)
  private enrollment: number[];
}
