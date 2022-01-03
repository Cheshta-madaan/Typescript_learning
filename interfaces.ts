interface Named{
  readonly name:string;
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
/*interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Max');

user1.greet('Hi there - I am');
console.log(user1);*/