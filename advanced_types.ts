type admin{
    name:string;
    privileges : string [];
}
type employees{
    name:string;
    age:number;
}

type adminemployee= admin & employees;
const a1: adminemployee={
    name= "cheshta",
    privileges: ["Access to DB"],
    age:30
}
