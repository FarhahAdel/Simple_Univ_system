export class UnivCourses {

    id:number;
    university_address:string;
    university_city:string;
    university_district:string;
    university_state:string;
    course_name:string;
	course_id:number;
	course_acronym:string;
    course_area:string;

    constructor(id:number, university_address:string, university_city:string, university_district:string, university_state:string, course_name:string,
        course_id:number, course_acronym:string, course_area:string){
            this.id=id;
            this.university_address=university_address;
            this.university_city=university_city;
            this.university_district=university_district;
            this.university_state=university_state;
            this.course_id = course_id;
            this.course_name=course_name;
            this.course_acronym=course_acronym;
            this.course_area=course_area;
        }
}
