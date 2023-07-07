import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Enrollment } from 'src/Enrollment/Entities/Enrollment';

export class CreatePersonDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly dni: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly first_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly last_name: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly sections: Enrollment[];
}

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}
