abstract class Department {
    // private name: string; // field of this class
    protected employees: string[] = []; // private means that employees is now a property which is only accessible from inside the class (this.employees) and cant be used outside the class as x.employees[2] = "Bla"

    constructor(protected readonly id: string, public name: string) { // a 'method'. function tied to this class and tied to any object being created based on this class which is executed when the object is being created. allows you to do initialization when the object is being created
        // this.name = n;
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation () {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID: ", this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    describe() {
        console.log("Accounting department - ID: ",this.id)
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }

    set mostRecentReport(value: string) {
        if (value) {
            this.addReport(value);
            return;
        }
        throw new Error("Please pass in a valid value!");
    }

    // constructor (id: string, private reports: string[]) {
    //     super(id,"Accounting");
    //     this.lastReport = reports[0];
    // }

    private constructor (id: string, private reports: string[]) {
        super(id,"Accounting");
        this.lastReport = reports[0];
    }

    // Singleton pattern
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2",[]);
        return this.instance;
    }

    addEmployee(name: string) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const itDept = new ITDepartment("d1",["Max"]); 

itDept.addEmployee("Max");
itDept.addEmployee("Mira");

itDept.describe();
itDept.printEmployeeInformation();

// const accounting = new AccountingDepartment("d2",[]);
const accounting = AccountingDepartment.getInstance();

// accounting.mostRecentReport = "";
accounting.mostRecentReport = "Year end report";
accounting.addReport("Something went wrong!");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Mo");
accounting.describe();
// accounting.printEmployeeInformation();
// accounting.printReports();

// dummy object. not based on any specific class
// value for this dummy object's describe property is a pointer at the describe property in the accounting object. just passing the function itself, not the value of what's executed. everything else executes fine, but the 'this' does not refer to the object the method was part of originally
// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();