abstract class department {
    
    protected readonly id:string;
    public name: string;
    protected employees:string[]= [];

    constructor(id: string, n:string)
    {
        this.id=id;
        this.name= n;
    }

    static createEmployee(name: string) {
        return { name: name };
    }
    abstract describe(this: department):void

    addemployee(employee:string)
    {
        this.employees.push(employee);
    }

    priintemployeeinformation()
    {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITdepartment extends department{
    admins :string[];

    constructor(id:string, admin:string[]){
        super(id, "IT");
        this.admins= admin;
    }
    describe(){
        console.log("Department id is: "+this.id);
    }
}

class Accountingdept extends department{
    private lastreport:string;
    private static instance: Accountingdept;
    
    //singleton implementaion
    private constructor(id:string, private reports: string[]){
        super(id, "Accounting");
        this.lastreport= reports[0];
    }

    static getinstance(){
        if(Accountingdept.instance){
            return this.instance;
        }
        return new Accountingdept("Dep1", ["admin"]);
    }
    get mostRecentReport() {
        if (this.lastreport) {
          return this.lastreport;
        }
        throw new Error('No report found.');
    }


    set mostRecentReport(value){
        if(!value){
            throw new Error ("ener valid value");
        }
        this.addReport(value);
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastreport = text;
    }

    addemployee(name: string){
        if (name === "test") {
          return;
        }
        this.employees.push(name);
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = department.createEmployee("Cheshta");
console.log(employee1);

const it = new ITdepartment('dep1', ["Cheshta"]);

it.addemployee("test");
it.addemployee("emp1");
it.describe();
it.name= "New IT dept";
it.priintemployeeinformation();


const accounting1 = Accountingdept.getinstance();
const accounting2= Accountingdept.getinstance();

accounting1.mostRecentReport= "1st most recent Report";
accounting1.addReport("all went well");

accounting1.addemployee("test");
accounting1.addemployee("Cheshta");
console.log(accounting1.priintemployeeinformation());
