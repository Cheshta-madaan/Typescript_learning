class department {
    name: string

    constructor(n: string){
        this.name= n;
    }

    description(this: department)
    {
        console.log("1st Department is : ", this.name);
    }
}
 const newdept = new department("Science");
 console.log(newdept);

 newdept.description();
const dummy= { name : "DummyObject", description: newdept.description};

dummy.description();
