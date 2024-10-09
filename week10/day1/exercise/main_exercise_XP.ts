/** Exercise 1: */
console.log("Hello, World!");

/** Exercise 2: */
let age: number = 25;
let personName: string = "John";
console. log(`My name is ${personName} and I am ${age} years old.`);

/** Exercise 3: */
let id: string | number;
id = 1; // valid
id = "a1"; // also valid

/** Exercise 4: */
function checkNumber(num: number): string {
    if(num > 0) return "positive";
    else if(num < 0) return "negative";
    else return "zero";
};
console.log(checkNumber(5)); // "positive"

/** Exercise 5: */
function getDetails(name: string, age: number): [string, number, string] {
    const message = `Hello, ${name}. You are ${age} years old.`;
    return [name, age, message];
}
const details = getDetails("John", 25);
console.log(details); // Output: ["John", 25, "Hello, John. You are 25 years old."]

/** Exercise 6: */
type Person = {
    name: string;
    age: number;
};
function createPerson(name: string, age: number): Person {
    return { name, age };
}
const person = createPerson("Alice", 30);
console.log(person); // Output: { name: "Alice", age: 30 }

/** Exercise 7: */
const inputElement = document.getElementById("inputField") as HTMLInputElement;
inputElement.value = "New Value";

/** Exercise 8: */
function getAction(role: string): string {
    switch(role) {
        case "admin":
            return "manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role";
    }
}
console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role

/** Exercise 9: */
function greet(name?: string): string {
    if(name) return `Hello, ${name}!`;
    else return "Hello, stranger!";
}
console.log(greet()); // Output: Hello, stranger!
console.log(greet("John")); // Output: Hello, John!