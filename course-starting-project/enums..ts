//const ADMIN =0;
//const READ_ONLY =1;
//const author= 2;

enum role {'ADMIN', "READ_ONLY",'AUTHOR'};
const person= {
    name:"cheshta",
    age: 30,
    hobbies:["sports",'cooking'],
    role: role.ADMIN, 
}

if (person.role === role.ADMIN)
{
    console.log("is admin.");
}
