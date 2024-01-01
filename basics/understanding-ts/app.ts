// // Decorators for classes - simply a function that you apply to a class in a certain way
// const Logger = (logString:string) => { // example of a decorator function
//     return function(constructor: Function) {
//         console.log(logString);
//         console.log(constructor);
//     }
// };

// const WithTemplate = (template: string, hookId: string) => {
//     return function(_: Function) {
//         console.log("Rendering template");
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//             hookEl.innerHTML = template;
//         }
//     }
// };

// // "@" special identifier that TS recognizes and the thing directly after the "@" symbol should point at a function (NOT execute it) which is the decorator

// // You will see the decorator output even if the class is not instantiated; decorator function runs when the compiler finds the class definition

// //  bottom most decorator gets executed first, but the creation of the decorator functions happens in the order they are written (Logger first in this case)
// @Logger("LOGGING - PERSON")
// @WithTemplate("<h1>My Person</h1>","app")
// class PersonDecorators {
//     name = "Max";
//     constructor() {
//         console.log("Creating person object...");
//     }
// }

// const pers = new PersonDecorators();
// console.log(pers);

// -----------

function Log(target: any, propertyName?: any) {
    console.log("Property decorator!");
    console.log(`Target  > ${target} <`,`Prop name > ${propertyName}<`);
}

class Product {
    @Log
    title: string;
    private _price: number;
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - should be positive");
        }
    }
    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}