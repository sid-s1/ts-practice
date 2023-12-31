// Intersection types
type Admin = {
    name: string;
    priveleges: string[];
};
type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Max",
    priveleges: ["create-server"],
    startDate: new Date()
};

type Combinables = string | number;
type Numeric = number | boolean;
type Universal = Combinables & Numeric;

const addTwoUnionTypes = (a: Combinables, b: Combinables) => {
    if (typeof a === "string" || typeof b === "string") { // typeof type guarding
        return a.toString() + b.toString();
    }
    return a + b;
};

// But the issue with the above is that when you pass two strings into that function and expect to get back a string and try to perform string operations like 'split' on it, it won't work - because TS will keep expecting the result to be a 'Combinables' type and not a string type - so you will need function overloading statement like below 

// const addTwoUnionTypes = (a: number, b: number) : number;
// const addTwoUnionTypes = (a: string, b: string) : string;
// const addTwoUnionTypes = (a: number, b: string) : string;
// const addTwoUnionTypes = (a: string, b: number) : string;

type UnknownEmployee = Employee | Admin;

const printEmployeeInformation = (emp: UnknownEmployee) => {
    console.log("Name: ",emp.name);
    if ("priveleges" in emp) { // 'in' type guarding
        console.log("Priveleges: ",emp.priveleges);
    }
    if ("startDate" in emp) { // 'in' type guarding
        console.log("Start date: ",emp.startDate);
    }
};

printEmployeeInformation(e1);

class Car {
    drive() {
        console.log("Driving a car...");
    }
}

class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount:number) {
        console.log("Loading cargo...",amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) { // instanceof type guarding
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions - another type of type guarding

interface Bird {
    type: 'bird'; // common property in every object that makes up our union that desribes our object
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'; // common property in every object that makes up our union that desribes our object
    runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
    // instanceof and 'in' checks wont work - because instanceof does not work for innterfaces and 'in' checks will keep increasing as the animal types increase
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed - ",speed);
}

moveAnimal({type: 'bird',flyingSpeed: 10});

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
const userInputElement4 = document.getElementById('user-input');
if (userInputElement4) {
    (userInputElement4 as HTMLInputElement).value = "Hi there!"; // works
}

// Optional chaining
const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: {title: "CEO", description: "My own company"}
};
console.log(fetchedUserData?.job?.title); // '?' checks if that thing exists first, before going ahead and helps prevent a runtime error

// Nullish Coalescing
const userInput = "";
const storedData = userInput ?? "DEFAULT"; // '??' helps in checking if the data is null or undefined - thankfully ONLY checks for null or undefined, and NOT empty string or 0
console.log(storedData);