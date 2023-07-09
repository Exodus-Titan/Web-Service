import { Module } from '@nestjs/common';
import { EndpointsController } from './endpoints.controller';
import { EndpointsService } from './endpoints.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/Person/Entities/Person';
import { Enrollment } from 'src/Enrollment/Entities/Enrollment';
import { Faculty } from 'src/Faculty/Entities/Faculty';
import { School } from 'src/School/Entities/School';
import { Section } from 'src/Section/Entities/Section';

@Module({
  imports: [TypeOrmModule.forFeature([Person, Enrollment, Faculty, School, Section])],
  controllers: [EndpointsController],
  providers: [EndpointsService]
})
export class EndpointsModule {}
