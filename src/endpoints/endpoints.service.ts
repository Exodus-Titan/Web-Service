import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { log } from 'console';
import { Status_BaseEntity } from 'src/BaseEntity/Enums/status_enum';
import { Enrollment } from 'src/Enrollment/Entities/Enrollment';
import { CreateFacultyDto, UpdateFacultyDto, deleteDto, idDto } from 'src/Faculty/Dto/faculty.dto';
import { Faculty } from 'src/Faculty/Entities/Faculty';
import { CreatePersonDto, UpdatePersonDto } from 'src/Person/Entities/Dto/person.dto';
import { Person } from 'src/Person/Entities/Person';
import { CreateSchoolDto, UpdateSchoolDto } from 'src/School/Entities/Dto/school.dto';
import { School } from 'src/School/Entities/School';
import { CreateLessonDto, UpdateLessonDto } from 'src/Section/Dto/section.dto';
import { Section } from 'src/Section/Entities/Section';
import { DataSource, DeepPartial, In, Repository } from 'typeorm';

@Injectable()
export class EndpointsService {
    constructor(
        @InjectRepository(Person) private personRepo: Repository<Person>,
        @InjectRepository(Faculty) private facultyRepo: Repository<Faculty>,
        @InjectRepository(School) private schoolRepo: Repository<School>,
        @InjectRepository(Section) private sectionRepo: Repository<Section>,
        @InjectRepository(Enrollment) private enrollmentRepo: Repository<Enrollment>
    ){}
        //El any es temporal mientras estan listos los dtos
    async listFaculties(){
        const facultiesList = await this.facultyRepo.find({where: {
            status: "enable"
        }
        })
        if (!facultiesList){
            throw new NotFoundException('There are no schools')
        }
        return facultiesList
        
    };

    async createFaculty(createFacultyObject: CreateFacultyDto){
        const newFaculty = this.facultyRepo.create(createFacultyObject);
        return (this.facultyRepo.save(newFaculty))
    };

    async updateFaculty(updateFacultyObject: UpdateFacultyDto){
        const faculty = await this.facultyRepo.findOneBy({ id: updateFacultyObject.idSearch})
        if(!faculty){
            throw new NotFoundException('The faculty with the id '+ updateFacultyObject.idSearch.toString +' not found')
        }
        (this.facultyRepo.merge(faculty, updateFacultyObject))
        return this.facultyRepo.save(faculty)
    };

    async deleteFaculty(id : idDto){
        const disable = new deleteDto();
        const faculty = await this.facultyRepo.findOneBy({ id: id.idSearch})
        if(!faculty){
            throw new NotFoundException('The faculty with the id '+ id.toString() +' not found')
        }
        this.facultyRepo.merge(faculty, disable)
        return this.facultyRepo.save(faculty)
    };

    async listSchools(){
        const schollsList = await this.schoolRepo.find({where: {
            status: "enable"
        }
        })
        if (!schollsList){
            throw new NotFoundException('There are no schools')
        }
        return schollsList
    };

    async createSchool(createSchoolObject: CreateSchoolDto){
        const newSchool = this.schoolRepo.create(createSchoolObject as DeepPartial<School>); //no c si esto vaya a funcionar
        return (this.schoolRepo.save(newSchool))
    };

    async updateSchool(updateSchoolObject: UpdateSchoolDto){
        const school = await this.schoolRepo.findOneBy({ id: updateSchoolObject.idSearch})
        if(!school){
            throw new NotFoundException('The school with the id '+ updateSchoolObject.idSearch.toString() +' not found')
        }
        this.schoolRepo.merge(school, updateSchoolObject);
        return this.schoolRepo.save(school)
    };

    async deleteSchool(id: idDto){
        const disable = new deleteDto();
        const school = await this.schoolRepo.findOneBy({ id: id.idSearch})
        if(!school){
            throw new NotFoundException('The school with the id '+ id.toString() +' not found')
        }
        this.schoolRepo.merge(school, disable)
        return this.schoolRepo.save(school)
    };

    async listSections(){
        const sectionsList = await this.sectionRepo.find({where: {
            status: "enable"
        }
        })
        if (!sectionsList){
            throw new NotFoundException('There are no sections')
        }
        return sectionsList
    };

    async createSection(createSectionObject: CreateLessonDto){
        const newSection = this.sectionRepo.create(createSectionObject as DeepPartial<Section>);
        return this.sectionRepo.save(newSection)
    };

    async updateSection(updateSectionObject: UpdateLessonDto){
        const section = await this.sectionRepo.findOneBy({ id: updateSectionObject.idSearch })
        if(!section){
            throw new NotFoundException('The section with the id '+ updateSectionObject.idSearch.toString() +' not found')
        }
        this.sectionRepo.merge(section, updateSectionObject);
        return this.sectionRepo.save(section)
    };
    
    async deleteSection(id: idDto){
        const disable = new deleteDto();
        const section = await this.sectionRepo.findOneBy({ id: id.idSearch})
        if(!section){
            throw new NotFoundException('The section with the id '+ id.toString() +' not found')
        }
        this.sectionRepo.merge(section, disable)
        return this.sectionRepo.save(section)
    };

    async listPersons(){
        const PersonsList = await this.personRepo.find({where: {
            status: "enable"
        }
        })
        if (!PersonsList){
            throw new NotFoundException('There are no Persons')
        }
        return PersonsList
    };

    async createPerson(createPersonObject: CreatePersonDto){
        const newPerson = this.personRepo.create(createPersonObject);
        log(newPerson.enrollment)
        return this.personRepo.save(newPerson)
    };

    async updatePerson(updatePersonObject: UpdatePersonDto){
        const person = await this.personRepo.findOneBy({ id: updatePersonObject.idSearch})
        if(!person){
            throw new NotFoundException('The person with the id '+ updatePersonObject.idSearch.toString() +' not found')
        }
        this.personRepo.merge(person, updatePersonObject);
        return this.personRepo.save(person)
    };

    async deletePerson(id: idDto){
        const disable = new deleteDto();
        const person = await this.personRepo.findOneBy({ id: id.idSearch})
        if(!person){
            throw new NotFoundException('The person with the id '+ id.toString() +' not found')
        }
        this.personRepo.merge(person, disable)
        return this.personRepo.save(person)
    };

    async enroll(enrollObject: any){};

    async unenroll(unenrollObject: any){};

    async listStudentsInSection(listStudentsInSectionObject: any){
       /* return await this.personRepo
      .createQueryBuilder('StudentsInSection')
      .leftJoinAndSelect('person.enrollments', 'enrollment')
      .leftJoinAndSelect('enrollment.section', 'section')
      .where('person.id = :personId AND section.id = :sectionId', { listStudentsInSectionObject.section })
      .getMany();*/
    };

    async listProfesorsInSection(listProfesorsInSectionObject: any){};
}





