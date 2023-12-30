// const names = ["Max","Manuel"];
// // OR
// const names2 : Array<string> = []; // same as writing string[]
// const promise: Promise<string> = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("This is done");
//     }, 2000);
// });
// promise.then(data => {
//     // But we cannot perform string operations here because TS is not able to check whether or not that is doable - IF Promise<string> is not done in Line 4
// });

const merge = (objA: object, objB: object) => {
    return Object.assign(objA,objB);
};

console.log(merge({name: "Max"},{age: 30}))

// But if we save the result of that merge operation to another object, like so -
const mergedObj = merge({name: "Max"},{age: 30});
// we will not be able to access the name and age properties of that
// that's why we must make it a generic function

const merge2 = <T extends {}, U>(objA: T, objB: U) => {
    return Object.assign(objA,objB);
};
const mergedObj2 = merge2({name: "Max"},{age: 30});
// This way, TS is able to tell that we are not dealing with the intersection of two random objects, but that we are dealing with the intersection of two objects that will have different structures, so it looks further in to what those structures are - mergedObj2.name or .age will work now
// We won't want to be too restrictive by saying objA: {name: string} because what if we want to have additional key-value pairs in the object

// But what if for the second object, we were to pass a number instead of an object? TS will just fail silently in that case. It will allow you to access name property still, but will throw an error if you try to access the age prop
// You need to restrict the type for the generic type by using 'extends' like so -

const merge3 = <T extends object, U extends object>(objA: T, objB: U) => {
    return Object.assign(objA,objB);
};
// const mergedObj3 = merge3({name: "Max"},30); - will throw compilation error

// Another generic function execution below
// Here, we could have used a union type or function overloading, but why go through that additional hassle, and also restrict ourselves
// Instead, we simply add an interface with the property that we NEED the parameters to have, and then do our thing
interface Lengthy {
    length: number;
}
const countAndDescribe = <T extends Lengthy>(element: T) : [T, string] => {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText]
};
console.log(countAndDescribe("Hi there!"));

const extractAndConvert = <T extends object, U extends keyof T> (obj: T, key: U) => {
    return "Value: " + obj[key];
};
console.log(extractAndConvert({name: "Max"},"name")); // if you try to access 'age' even though it's not there in the obj; TS will throw an error

