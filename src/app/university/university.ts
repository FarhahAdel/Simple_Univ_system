import { Courses } from "../courses/courses";
import { Location } from "./location";
export class University {
    id!:number;
    name:string;
    location:Location;
    edit:boolean;
    constructor(name:string,location:Location,edit:boolean){
        this.location=location;
        // this.id=id;
        this.name=name;
        this.edit=edit;
    }

}
