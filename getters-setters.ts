class person {
    private _age! : number;
    private _firstname: string="";
    private _lastname:string= "";

    public get age()
    {
        return this._age;
    }
    public set age(theage:number)
    {
        if(theage<=0 || theage >150)
        {
            throw new Error("enter valid age");
            
        }
        this._age= theage;
    }
    public get firstName() {
        return this._firstname;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstname = theFirstName;
    }

    public get lastName() {
        return this._lastname;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastname = theLastName;
    }
    public get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person1= new person();
person1.age=40;
console.log("age is: " +person1.age);
person1.firstName="cheshta";
person1.lastName="madaan";
console.log(person1.fullName);
