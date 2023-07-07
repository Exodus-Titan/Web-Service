import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { Type_School } from '../Enums/Types_enum_school';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly uc: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly semester: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly type: Type_School;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly th: number;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly ph: number;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly lh: number;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly schoolId: number;
}

export class UpdateLessonDto extends PartialType(CreateLessonDto) {}
