class department {
    public name: string;
    private dept_id : string;
    private students : string[]=[];


    constructor(n: string, id :string){
        this.name= n;
        this.dept_id= id;
    }

    description(this: department)
    {
        console.log("1st Department is : ", this.name);
    }
    addstudent(nam: string)
    {
        this.students.push(nam);
    }
    printdetails()
    {
        console.log(this.students.length);
        console.log(this.students);
        console.log(this.dept_id);
    }
}
 const newdept = new department("Science", "SCI01");
 console.log(newdept);

 newdept.description();
const dummy= { name : "DummyObject", description: newdept.description};

//dummy.description();

newdept.addstudent("cheshta");
newdept.addstudent("nadhya");
//newdept.students[2]= "vrinda";    works if students is not declared private

newdept.printdetails();
