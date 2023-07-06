import { BaseEntiyy } from "src/BaseEntity/Entities/BaseEntity";
import { Enrollment } from "src/Enrollment/Entities/Enrollment";

export class Person extends BaseEntiyy{
    private dni : string;
    private first_name : string;
    private last_name : string;
    private secctions : Enrollment[];
}