const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number,string];
} = {
    name: "Sid",
    age: 27,
    hobbies: ["Reading","Exercising"],
    role: [2, "author"]
};

let favouriteActivities: string[];
favouriteActivities = ["Sports"];
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}