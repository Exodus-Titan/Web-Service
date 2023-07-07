import { BaseEntity } from 'src/BaseEntity/Entities/BaseEntity';
import { Enrollment } from 'src/Enrollment/Entities/Enrollment';

export class Person extends BaseEntity {
  private dni: string;
  private first_name: string;
  private last_name: string;
  private sections: Enrollment[];
}
