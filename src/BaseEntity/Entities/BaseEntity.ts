import { Status_BaseEntity } from '../Enums/status_enum';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity()
  export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({ type: 'varchar', length: 255})
  private status: Status_BaseEntity;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  private created_date: Date;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  private deleted_date: Date;

  public getId(){
    return this.id
  }
}
