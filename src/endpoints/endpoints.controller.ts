import { Controller, Get, Post } from '@nestjs/common';
import { EndpointsService } from './endpoints.service';
import { get } from 'http';

@Controller('endpoints')
export class EndpointsController {
    constructor(private endpointService: EndpointsService){}

    @Get('listFaculties')
    listFaculties(){};

    @Post('createFaculty')
    createFaculty(){};

    @Post('updateFaculty')
    updateFaculty(){};

    @Post('deleteFaculty')
    deleteFaculty(){};


    @Get('listSchools')    
    listSchools(){};

    @Post('createSchool')
    createSchool(){};

    @Post('updateSchool')
    updateSchool(){};

    @Post('deleteSchool')
    deleteSchool(){};


    @Get('listSelections')     
    listSectinos(){};

    @Post('createSelection')
    createSection(){};

    @Post('updateSelection')
    updateSection(){};

    @Post('deleteSelection')
    deleteSection(){};


    @Get('listPersons') 
    listPersons(){};

    @Post('createPerson')
    createPerson(){};

    @Post('updatePerson')
    updatePerson(){};

    @Post('deletePerson')    
    deletePerson(){};

    @Post('enroll') 
    enroll(){};

    @Post('unenroll') 
    unenroll(){};

    @Get('listStudentsInSection')
    listStudentsInSection(){};

    @Get('listProfesorsInSection')
    listProfesorsInSection(){};
}
