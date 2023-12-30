// Whole idea behind generic types (functions or classes) = Flexible yet strongly typed
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var merge = function (objA, objB) {
    return Object.assign(objA, objB);
};
console.log(merge({ name: "Max" }, { age: 30 }));
// But if we save the result of that merge operation to another object, like so -
var mergedObj = merge({ name: "Max" }, { age: 30 });
// we will not be able to access the name and age properties of that
// that's why we must make it a generic function
var merge2 = function (objA, objB) {
    return Object.assign(objA, objB);
};
var mergedObj2 = merge2({ name: "Max" }, { age: 30 });
// This way, TS is able to tell that we are not dealing with the intersection of two random objects, but that we are dealing with the intersection of two objects that will have different structures, so it looks further in to what those structures are - mergedObj2.name or .age will work now
// We won't want to be too restrictive by saying objA: {name: string} because what if we want to have additional key-value pairs in the object
// But what if for the second object, we were to pass a number instead of an object? TS will just fail silently in that case. It will allow you to access name property still, but will throw an error if you try to access the age prop
// You need to restrict the type for the generic type by using 'extends' like so -
var merge3 = function (objA, objB) {
    return Object.assign(objA, objB);
};
var countAndDescribe = function (element) {
    var descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
};
console.log(countAndDescribe("Hi there!"));
var extractAndConvert = function (obj, key) {
    return "Value: " + obj[key];
};
console.log(extractAndConvert({ name: "Max" }, "name")); // if you try to access 'age' even though it's not there in the obj; TS will throw an error
// Generic Classes
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
var createCourseGoal = function (title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
};
// Another utility type in TS
var names = ["Max", "Sports"];
