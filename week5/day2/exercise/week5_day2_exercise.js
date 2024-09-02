/** Exercise 1: */

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Display the colors with thier order
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Check if "Violet" is in the array
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}


/** Exercise 2: */

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

// Functions to determine the correct ordinal suffix
function getOrdinalSuffix(index) {
    const lastDigit = index % 10;
    const lastTwoDigits = index % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return ordinal[0]; // for 11th, 12th, and 13th
    }
    switch (lastDigit) {
        case 1:
            return ordinal[1]; // 1st
        case 2:
            return ordinal[2]; // 2nd
        case 3:
            return ordinal[3]; // 3rd
        default:
            return ordinal[0]; // for 4th, 5th, 6th, etc.
    }
}
// Display the colors with thier ordinal suffix
colors.forEach((color, index) => {
    const position = index + 1;
    const suffix = getOrdinalSuffix(position);
    console.log(`${position}${suffix} choice is ${color}.`);
});


/** Exercise 3: */
// 1:
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// Result: ["bread", "carrot", "potato", "chicken", "apple", "orange"]

// 2:
const country = "USA";
console.log([...country]);
// Result: ["U", "S", "A"]

// Bonus:
let newArray = [...[,,]];
console.log(newArray);
// Result: [undefined, undefined]


/** Exercise 4: */

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1. Create a new array with a welcome message for each user
const welcomeStudents = users.map(user => `Hello ${user.firstName}`)
console.log(welcomeStudents)

// 2. Filter to get only Full stack residents
const fullStackResident = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResident);

// 3. Bonus: Chain filter and map to get last names of the full stack residents
const lastNamesOfFullStackResident = users
    .filter(user => user.role === 'Full Stack Resident') // get only full stack residents
    .map(user => user.lastName); // get only last names
console.log(lastNamesOfFullStackResident);


/** Exercise 5: */

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use reduce() to combine all of these into a single string
const combinedString = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);
console.log(combinedString);


/** Exercise 6: */

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];

// 1. Filter students that passed the course
const passedStudents = students.filter(student => student.isPassed);
// 2. Chain filter() with forEach() to congratulate each passed student
passedStudents.forEach(student => {
    console.log(`Congratulations ${student.name}, you passed the course in ${student.course}!`);
});