export class Location {

    address:string;
    city:string;
    district:string;
    state:string;


    constructor(address:string,state:string, district:string, city:string){
        this.address=address;
        this.city=city;
        this.district=district;
        this.state=state;
    }
}
