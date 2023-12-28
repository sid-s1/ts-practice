var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private name: string; // field of this class
        this.employees = []; // private means that employees is now a property which is only accessible from inside the class (this.employees) and cant be used outside the class as x.employees[2] = "Bla"
        // this.name = n;
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department - ID: ", this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    // constructor (id: string, private reports: string[]) {
    //     super(id,"Accounting");
    //     this.lastReport = reports[0];
    // }
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting department - ID: ", this.id);
    };
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found");
        },
        set: function (value) {
            if (value) {
                this.addReport(value);
                return;
            }
            throw new Error("Please pass in a valid value!");
        },
        enumerable: false,
        configurable: true
    });
    // Singleton pattern
    AccountingDepartment.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var itDept = new ITDepartment("d1", ["Max"]);
itDept.addEmployee("Max");
itDept.addEmployee("Mira");
itDept.describe();
itDept.printEmployeeInformation();
// const accounting = new AccountingDepartment("d2",[]);
var accounting = AccountingDepartment.getInstance();
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
