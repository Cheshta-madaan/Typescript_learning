//define function using function types

/*type add =(n:number, m:number)=> number
let addfn: add;
addfn=(n1:number, n2:number)=>{
    return n1+n2;
}*/
// function types using interfaces
interface addfn {
    (a:number,b:number): number;
}
let add: addfn;
add=(n1:number, n2:number)=>{
    return n1+n2;
}


console.log(add(4,68));
interface Named{
    readonly name:string;
    output?: string;
  }
  
  interface Greeting extends Named{
     greeting(phrase:string):void;
  }
  
  // object of interface
  let user : Greeting;
  
  user = {
    name: "cheshta",
    greeting(phrase:string){      // define the methods of the interface
      console.log(phrase+ " :" +this.name);
    }
  }
  user.greeting("greetings for the day");
  // person class implements greetings interface
  class person implements Greeting{
    name: string;
    age: number= 30;
  
    constructor(n:string){
      this.name= n;
    }
    greeting(phrase: string): void {
        console.log(phrase + " : "+ this.name);
    }
  }
  
  
  
  let user1= new person("User 1");
  user1.greeting("good evening");
  //user1.name("cheshta")
  
