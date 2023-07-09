import { Injectable } from '@nestjs/common';

@Injectable()
export class EndpointsService {
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
