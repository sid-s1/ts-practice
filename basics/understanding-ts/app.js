// interface Person {
//     name: string;
//     age: number;
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase, " ", this.name);
    };
    return Person;
}());
var user1;
user1 = new Person("Max");
user1.greet("Hi there, I am");
// interface AddFn {
//     (n1: number, n2: number):number;
// }
// let addTwoNums:AddFn;
// addTwoNums = (n1: number,n2: number) => {
//     return n1+n2;
// }
