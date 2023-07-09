import { Controller, Get, Post } from '@nestjs/common';
import { EndpointsService } from './endpoints.service';
import { get } from 'http';

@Controller('education')
export class EndpointsController {
    constructor(private endpointService: EndpointsService){}

    @Get('listFaculties')
    listFaculties(){
        return('Test ListFaculties')
    };

    @Post('createFaculty')
    createFaculty(){
        return('Test CreateFacultiy')
    };

    @Post('updateFaculty')
    updateFaculty(){
        return('Test updateFacultiy')
    };

    @Post('deleteFaculty')
    deleteFaculty(){
        return('Test deleteFacultiy')
    };


    @Get('listSchools')    
    listSchools(){
        return('Test ListSchools')
    };

    @Post('createSchool')
    createSchool(){
        return('Test CreateSchool')
    };

    @Post('updateSchool')
    updateSchool(){
        return('Test updateSchool')
    };

    @Post('deleteSchool')
    deleteSchool(){
        return('Test DeleteSchool')
    };


    @Get('listSelections')     
    listSectinos(){
        return('Test ListSections')
    };

    @Post('createSelection')
    createSection(){
        return('Test createSection')

    };

    @Post('updateSelection')
    updateSection(){
        return('Test updateSection')
    };

    @Post('deleteSelection')
    deleteSection(){
        return('Test deleteSection')
    };


    @Get('listPersons') 
    listPersons(){
        return('Test listPersons')
    };

    @Post('createPerson')
    createPerson(){
        return('Test createPerson')
    };

    @Post('updatePerson')
    updatePerson(){
        return('Test updatePerson')
    };

    @Post('deletePerson')    
    deletePerson(){
        return('Test deletePerson')
    };

    @Post('enroll') 
    enroll(){
        return('Test enroll')
    };

    @Post('unenroll') 
    unenroll(){return('Test unenroll')};

    @Get('listStudentsInSection')
    listStudentsInSection(){
        return('Test listStudentsSection')
    };

    @Get('listProfesorsInSection')
    listProfesorsInSection(){
        return('Test ListProfesorsSection')
    };
}
