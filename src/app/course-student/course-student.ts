export class CourseStudent {
    id:number;
    course_id:number;
    student_id:number;
    univ_id:number;
    enrolment_date:Date;

    constructor(id:number, course_id:number, student_id:number, univ_id:number, enrolment_date:Date){
        this.id=id;
        this.student_id=student_id;
        this.course_id=course_id;
        this.univ_id=univ_id;
        this.enrolment_date=enrolment_date;
    }
}
