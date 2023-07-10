import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

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
  readonly schoolId: number ;
}

export class UpdateFacultyDto extends PartialType(CreateFacultyDto) {
  @IsNumber()
  @ApiProperty()
  readonly idSearch: number;
}

export class deleteDto{
  
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  readonly status: string = "disabled"

  @IsDate()
  @ApiProperty()
  readonly deleted_date: Date = new Date();
}

export class idDto{
  @IsNumber()
  @ApiProperty()
  readonly idSearch: number;
}
