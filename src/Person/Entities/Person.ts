import { BaseEntity } from 'src/BaseEntity/Entities/BaseEntity';
import { Enrollment } from 'src/Enrollment/Entities/Enrollment';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class Person extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  dni: string;

  @Column({ type: 'varchar', length: 255 })
  first_name: string;

  @Column({ type: 'varchar', length: 255 })
  last_name: string;

  @ManyToOne(() => Enrollment, (enrollment) => enrollment.getId)
  enrollment: number[];
}
