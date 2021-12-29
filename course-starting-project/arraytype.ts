const person= {
    //name:string,
    //ag:number
//}={
    name : "cheshta",
    age :30,
    hobbies:['sports','cooking']
}
console.log(person.name);

//accessing hobby of 'person' object using for loop
for (const hobby of person.hobbies)
{
    console.log(hobby);
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); wont work as map is for arrays not strings
}