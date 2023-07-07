import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsPositive } from 'class-validator';

export class CreateSchoolDto {
  @IsNumberString()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly faculties: number[];

  @IsNumberString()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly sections: number[];
}

export class UpdateSchoolDto extends PartialType(CreateSchoolDto) {}
