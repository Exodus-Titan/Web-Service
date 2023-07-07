import { BaseEntity } from 'src/BaseEntity/Entities/BaseEntity';

export abstract class Entity extends BaseEntity {
  private name: string;
  private description: string;
}
