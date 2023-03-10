export class Courses {

    id!:number;
    name:string;
    acronym:string;
    area:string;
    edit:boolean=false;
    constructor(id:number,course_name:string,acronym:string,area:string ){

        this.id=id;
        this.name=course_name;
        console.log(course_name);
        this.acronym=acronym;
        this.area=area;

    }
}
