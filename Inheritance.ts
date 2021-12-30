class Department {
    public name: string;
    private employees: string[] = [];
    private dept_id:string;
  
    constructor(n: string, id :string) {
      this.name = n;
      this.dept_id= id;
    }
  
    describe(this: Department) {
      console.log('Department: ' + this.name);
    }
  
    addEmployee(employee: string) {
      // validation etc
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
      console.log(this.dept_id);
    }
  }

  class ITDepartment extends Department{
      public admin: string[];
        constructor(id:string, admin:string[]){
            super("IT",id );
            this.admin= admin;
        }
  }
  
  class accountingdept extends Department{
      private reports: string[];
      constructor(id:string, report:string[]){
            super("Accounting", id);
            this.reports=report;
      }
      addreport(msg:string){
          this.reports.push(msg);
      }
      getreport(){
          console.log(this.reports);
      }
  }
  const IT= new ITDepartment("dep2", ['cheshta']);
  IT.addEmployee("cheshta");
  IT.addEmployee("test1");
  IT.admin[1]= "admin1";

  IT.describe();
  IT.printEmployeeInformation();
  
  const accounting = new accountingdept("DEP3", [])

  accounting.addreport("all well...");
  accounting.getreport();
