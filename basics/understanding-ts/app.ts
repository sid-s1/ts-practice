// Whole idea behind generic types (functions or classes) = Flexible yet strongly typed

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

// Generic Classes
class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

// BUT, if you try to create a new data storage object with object type, you will encounter an error when you try to remove a certain item - because objects are not a primitive data type, and when JS will look for their reference to try and remove them from the array, it won't find them and it will just remove the last element from the array instead
// So, limit it a bit more to only primitive data types by using class DataStorage <T extends number | string | boolean>


// Partial Type - A utility type in TS
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}
const createCourseGoal = (title: string, description: string, date: Date) : CourseGoal => {
    let courseGoal : Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
};

// Another utility type in TS
const names : Readonly<string[]> = ["Max","Sports"];

