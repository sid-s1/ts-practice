// interface Person {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//     name: "Max",
//     age: 30,
//     greet(phrase: string) {
//         console.log(phrase," ",this.name);
//     }
// };

// user1.greet("Hi there, I am");

interface Named {
    readonly name: string; // implying that which object implements this interface, can only set this property once and that it is readonly after that
    outputName?: string; //optional property
}

interface Greetable extends Named {
    greet(phrase: string):void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }
    greet(phrase: string) {
        console.log(phrase," ",this.name);
    }
}

let user1: Greetable;

user1 = new Person("Max");
user1.greet("Hi there, I am");

// interface AddFn {
//     (n1: number, n2: number):number;
// }

// let addTwoNums:AddFn;
// addTwoNums = (n1: number,n2: number) => {
//     return n1+n2;
// }