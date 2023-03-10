export class Student {

    id:number;
    userName:string;
    password:string;
    dob:Date;
    name:string;
    situation:string;
    role:string;

    constructor(id:number, username:string, password:string, dob:Date, name:string, situation:string, role:string){
        this.userName=username;
        this.password=password;
        this.dob=dob;
        this.name=name;
        this.situation=situation;
        this.id=id;
        this.role=role;
    }

}
