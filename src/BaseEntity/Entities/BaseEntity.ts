import { Status_BaseEntity } from "../Enums/status_enum";

export abstract class BaseEntiyy{
    private id : number; 
    private status : Status_BaseEntity ;
    private created_date : Date;
    private deleted_date : Date;
}