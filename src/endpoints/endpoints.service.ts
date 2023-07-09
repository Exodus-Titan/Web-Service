import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/Person/Entities/Person';
import { Repository } from 'typeorm';

@Injectable()
export class EndpointsService {
    constructor(
        @InjectRepository(Person) private personRepo: Repository<Person>
    ){}

    listFaculties(){};
    createFaculty(){};
    updateFaculty(){};
    deleteFaculty(){};

    listSchools(){};
    createSchool(){};
    updateSchool(){};
    deleteSchool(){};

    listSections(){};
    createSection(){};
    updateSection(){};
    deleteSection(){};

    listPersons(){};
    createPerson(){};
    updatePerson(){};
    deletePerson(){};

    enroll(){};

    unenroll(){};

    listStudentsInSection(){};

    listProfesorsInSection(){};
}
