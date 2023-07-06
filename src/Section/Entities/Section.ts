import { Entity } from "src/Entity/Entities/Entity";
import { Type_School } from "../Enums/Types_enum_school";

export class Section extends Entity{
    private uc : number;
    private semester : number; 
    private type : Type_School;
    private th : number; // en el diagrama estos atributos estaban en español, los puse en ingles xd
    private ph : number;
    private lh : number; 
    private school : number;
}