"use strict";
const person = {
    name: "Sid",
    age: 27,
    hobbies: ["Reading", "Exercising"],
    role: [2, "author"]
};
let favouriteActivities;
favouriteActivities = ["Sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
