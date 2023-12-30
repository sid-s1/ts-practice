var _a;
var e1 = {
    name: "Max",
    priveleges: ["create-server"],
    startDate: new Date()
};
var addTwoUnionTypes = function (a, b) {
    if (typeof a === "string" || typeof b === "string") { // typeof type guarding
        return a.toString() + b.toString();
    }
    return a + b;
};
var printEmployeeInformation = function (emp) {
    console.log("Name: ", emp.name);
    if ("priveleges" in emp) { // 'in' type guarding
        console.log("Priveleges: ", emp.priveleges);
    }
    if ("startDate" in emp) { // 'in' type guarding
        console.log("Start date: ", emp.startDate);
    }
};
printEmployeeInformation(e1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo...", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) { // instanceof type guarding
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
var moveAnimal = function (animal) {
    // instanceof and 'in' checks wont work - because instanceof does not work for innterfaces and 'in' checks will keep increasing as the animal types increase
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed - ", speed);
};
moveAnimal({ type: 'bird', flyingSpeed: 10 });
// const paragraph = document.getElementById('message-output'); // TS only recognizes this as an HTML Element and not as a paragraph, as it would if queryselector was used 
// const userInputElement = document.getElementById('user-input');
// // userInputElement.value = "Hi there"; - cant do this because 1) object could be possibly null, 2) because it is being as a generic HTML element type which might not have that property "value"
// // instead we do the below -
// // Option 1 -
// const userInputElement2 = <HTMLInputElement>document.getElementById('user-input')!;
// userInputElement2.value = "Hi there!"; // works - exclamation mark at the end confirms that it will never be null - only use when as a developer you know FOR SURE that this will not be null
// // or we do the below -
// // Option 2 -
// const userInputElement3 = document.getElementById('user-input')! as HTMLInputElement;
// userInputElement3.value = "Hi there!"; // works and avoids the hotchpotch that can happen when using React with TS as React also uses angle brackets at the start but that's only for React's own parsing
// If you are not certain that it will not be null, use the below approach -
// Option 3 -
var userInputElement4 = document.getElementById('user-input');
if (userInputElement4) {
    userInputElement4.value = "Hi there!"; // works
}
// Optional chaining
var fetchedUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO", description: "My own company" }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title); // '?' checks if that thing exists first, before going ahead and helps prevent a runtime error
// Nullish Coalescing
var userInput = "";
var storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT"; // '??' helps in checking if the data is null or undefined - thankfully ONLY checks for null or undefined, and NOT empty string or 0
console.log(storedData);
