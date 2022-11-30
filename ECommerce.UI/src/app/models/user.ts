export class User{
    iD:number;
    firstName:string;
    lastName:string;
    email:string;
    password: string = "";

    constructor(Id:number, FirstName:string,LastName:string, Email:string) {
        this.iD = Id;
        this.firstName = FirstName;
        this.lastName = LastName;
        this.email = Email;
    }
}
