import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateFacultyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly schoolId: number;
}

export class UpdateFacultyDto extends PartialType(CreateFacultyDto) {}
