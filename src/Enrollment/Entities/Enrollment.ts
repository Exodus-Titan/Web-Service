import { BaseEntity } from 'src/BaseEntity/Entities/BaseEntity';
import { Type_Enrollment } from '../Enums/Types_enum';

export class Enrollment extends BaseEntity {
  private type: Type_Enrollment;
  private section: number; //id de la seccion inscrita
}
