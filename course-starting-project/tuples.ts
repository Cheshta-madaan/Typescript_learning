const person:{
    name:string;
    age : number;
    hobbies: string[];
    role:[number,string];
}= {
    name : "cheshta",
    age :30,
    hobbies:['sports','cooking'],
    role: [1,'admin']
}
console.log(person);

person.role.push("support");
person.role= [10,"support"];

console.log(person.role);