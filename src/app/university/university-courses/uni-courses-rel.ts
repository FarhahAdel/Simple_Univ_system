export class UniVCoursesRel {

    id!:number;
    univ_id:number;
    course_id:number;


    constructor(univ_id:number, course_id:number){
        // this.id = id;
        this.course_id = course_id;
        this.univ_id = univ_id;
    }
    
}
