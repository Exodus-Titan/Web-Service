import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateSchoolDto {
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
  readonly faculties: number[];

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly sections: number[];
}

export class UpdateSchoolDto extends PartialType(CreateSchoolDto) {
  @IsNumber()
  @ApiProperty()
  readonly idSearch: number;
}
