import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateSchoolDto {
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly faculties: number[];

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly sections: number[];
}

export class UpdateSchoolDto extends PartialType(CreateSchoolDto) {}
