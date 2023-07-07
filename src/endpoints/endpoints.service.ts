import { Injectable } from '@nestjs/common';

@Injectable()
export class EndpointsService {
    listFaculties(){};
    createFacultie(){};
    updateFacultie(){};
    deleteFacultie(){};

    listSchools(){};
    createSchool(){};
    updateSchool(){};
    deleteSchool(){};

    listSectios(){};
    createSectio(){};
    updateSectio(){};
    deleteSectio(){};

    listPersons(){};
    createPerson(){};
    updatePerson(){};
    deletePerson(){};

    enroll(){};

    unenroll(){};

    listStudentsInSection(){};

    listProfesorsInSection(){};
}
