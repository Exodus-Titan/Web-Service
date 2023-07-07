import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { Type_Enrollment } from '../Enums/Types_enum';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly type: Type_Enrollment;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly sectionIda: number;
}

export class UpdateLessonDto extends PartialType(CreateLessonDto) {}
