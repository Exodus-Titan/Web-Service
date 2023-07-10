import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { Type_School } from '../Enums/Types_enum_school';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly uc: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly semester: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly type: string;

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

export class UpdateLessonDto extends PartialType(CreateLessonDto) {
  @IsNumber()
  @ApiProperty()
  readonly idSearch: number;
}
