import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { EndpointsService } from './endpoints.service';
import {
  CreateFacultyDto,
  UpdateFacultyDto,
  idDto,
} from 'src/Faculty/Dto/faculty.dto';
import {
  CreateSchoolDto,
  UpdateSchoolDto,
} from 'src/School/Entities/Dto/school.dto';
import { CreateLessonDto, UpdateLessonDto } from 'src/Section/Dto/section.dto';
import {
  CreatePersonDto,
  UpdatePersonDto,
} from 'src/Person/Entities/Dto/person.dto';
import { CreateEnrollmentDto } from 'src/Enrollment/Dto/enrollmet.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Faculty')
@Controller('')
export class EndpointsController {
  constructor(private endpointService: EndpointsService) {}

  @Get('listFaculties')
  listFaculties() {
    return this.endpointService.listFaculties();
  }

  @Post('createFaculty')
  createFaculty(@Body() dto: CreateFacultyDto) {
    console.groupCollapsed({ dto });
    return this.endpointService.createFaculty(dto);
  }

  @Put(':id/updateFacultyState')
  updateFacultyState(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateFacultyDto,
  ) {
    return this.endpointService.ChangeState(id, payload);
  }

  @Put('updateFaculty')
  updateFaculty(@Body() dto: UpdateFacultyDto) {
    console.groupCollapsed({ dto });
    return this.endpointService.updateFaculty(dto);
  }

  @Delete('deleteFaculty')
  deleteFaculty(@Body() dto: idDto) {
    console.groupCollapsed({ dto });
    return this.endpointService.deleteFaculty(dto);
  }

  @Get('listSchools')
  listSchools() {
    return this.endpointService.listSchools();
  }

  @Post('createSchool')
  createSchool(@Body() dto: CreateSchoolDto) {
    console.groupCollapsed({ dto });
    return this.endpointService.createSchool(dto);
  }

  @Put('updateSchool')
  updateSchool(@Body() dto: UpdateSchoolDto) {
    console.groupCollapsed({ dto });
    return this.endpointService.updateSchool(dto);
  }

  @Delete('deleteSchool')
  deleteSchool(@Body() dto: idDto) {
    console.groupCollapsed({ dto });
    return this.endpointService.deleteSchool(dto);
  }

  @Get('listSections')
  listSectinos() {
    return this.endpointService.listSections();
  }

  @Post('createSection')
  createSection(@Body() dto: CreateLessonDto) {
    console.groupCollapsed({ dto });
    return this.endpointService.createSection(dto);
  }

  @Put('updateSection')
  updateSection(@Body() dto: UpdateLessonDto) {
    console.groupCollapsed({ dto });
    return this.endpointService.updateSection(dto);
  }

  @Post('deleteSection')
  deleteSection(@Body() dto: idDto) {
    console.groupCollapsed({ dto });
    return this.endpointService.deleteSection(dto);
  }

  @Get('listPersons')
  listPersons() {
    return this.endpointService.listPersons();
  }

  @Post('createPerson')
  createPerson(@Body() dto: CreatePersonDto) {
    console.groupCollapsed({ dto });
    return this.endpointService.createPerson(dto);
  }

  @Put('updatePerson')
  updatePerson(@Body() dto: UpdatePersonDto) {
    console.groupCollapsed({ dto });
    return this.endpointService.updatePerson(dto);
  }

  @Post('deletePerson')
  deletePerson(@Body() dto: idDto) {
    console.groupCollapsed({ dto });
    return this.endpointService.deletePerson(dto);
  }

  @Post('enroll')
  enroll(@Body() dto: CreateEnrollmentDto) {
    console.groupCollapsed({ dto });
    return this.endpointService.enroll(dto);
  }

  @Post('unenroll')
  unenroll(@Body() dto: any) {
    //Probablemente tengas q hacer un dto para buscar, o usar el q yo cree para eliminar, si usas un id solo la vaina explota xd
    console.groupCollapsed({ dto }); // el q use es idDto solo tiene un id
    return this.endpointService.unenroll(dto);
  }

  @Get('listStudentsInSection')
  listStudentsInSection() {
    return 'Test listStudentsSection';
  }

  @Get('listProfesorsInSection')
  listProfesorsInSection() {
    return 'Test ListProfesorsSection';
  }
}
