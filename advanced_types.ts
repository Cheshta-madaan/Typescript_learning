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

// discriminating union types and type guards
interface Bird {
    type :"bird";
    flyingSpeed : number;
}

interface Horse {
    type: "horse";
    runningSpeed: number;
}

type animal= Bird | Horse;

function movingSpeed(animal: animal){  //input animal of type animal
    let speed :number;
    switch(animal.type){
    case "bird":
        speed= animal.flyingSpeed;
        break;
    case "horse":
        speed= animal.runningSpeed;
    }
    console.log("Moving Speed is: "+ speed);   
}

movingSpeed({ type: "bird", flyingSpeed:20});
