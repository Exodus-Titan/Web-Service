import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { Type_Enrollment } from '../Enums/Types_enum';

export class CreateEnrollmentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly type: string;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly sectionIda: number;
}

export class UpdateEnrollmentnDto extends PartialType(CreateEnrollmentDto) {
  @IsNumber()
  @ApiProperty()
  readonly idSearch: number;
}
