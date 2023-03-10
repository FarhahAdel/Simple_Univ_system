import { typeWithParameters } from "@angular/compiler/src/render3/util";

export class Enrollment {

    id:number;
    student_id:number;
    student_name:string;
    student_dob:Date;
    registration_date:Date;
    student_situation:String;
    enrolment_date:Date;
    course_name:string;
    course_id:number;
    course_acronym:string;
    course_area:string;
    univ_id:number;
    univ_name:string;
    

    constructor(student_name:string, student_dob:Date, registration_date:Date, student_situation:String, enrolment_date:Date, course_name:string, id:number,
        student_id:number, course_id:number, course_acronym:string, course_area:string, univ_id:number, univ_name:string){
        this.student_name=student_name;
        this.student_dob=student_dob;
        this.student_situation=student_situation;
        this.registration_date=registration_date;
        this.enrolment_date=enrolment_date;
        this.course_id=course_id;
        this.course_name=course_name;
        this.id=id;
        this.student_id=student_id;
        this.course_acronym=course_acronym;
        this.course_area=course_area;
        this.univ_id=univ_id;
        this.univ_name=univ_name;
        }
}

// 	8		varchar(255)	latin1_swedish_ci		Yes	NULL		
// 	9		bigint(20)			No	0		
// 	10		varchar(255)	latin1_swedish_ci		Yes	NULL		
// 	11		varchar(255)	latin1_swedish_ci		Yes	NULL		
// 	12		bigint(20)			No	0		
// 	13	univ_name
