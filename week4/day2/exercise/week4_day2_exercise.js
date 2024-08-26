// Exercise 1:

// Part 1:
// Remove Greg
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(people.indexOf("Greg"), 1);

// Replace James with Jason
const people = ["Mary", "Devon", "James"];
people[people.indexOf("James")] = "Jason";

// Add your name to the end
const people = ["Mary", "Devon", "Jason"];
people.push("Yehoshua");

// Console.log Mary's index
const people = ["Mary", "Devon", "Jason", "Yehoshua"];
console.log(people.indexOf("Mary"));

// Make a copy of the people array using the slice method that does NOT include “Mary” or your name
const people = ["Mary", "Devon", "Jason", "Yehoshua"];
const copy = people.slice(1, -1); 
console.log(copy);

// Get the index of "Foo" and explain why it returns -1
const people = ["Mary", "Devon", "Jason", "Yehoshua"];
console.log(people.indexOf("Foo")); // explanation: The indexOf method returns -1 when the element is not found in the array. Since "Foo" is not in the people array, indexOf returns -1.

// Create a variable called last which is the last element in the people array
const people = ["Mary", "Devon", "Jason", "Yehoshua"];
const last = people[people.length - 1];
console.log(last);

// Part 2:
const people = ["Mary", "Devon", "Jason", "Yourname"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// Iterate through the people array and exit the loop after you console.log "Devon"
const people = ["Mary", "Devon", "Jason", "Yourname"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}


// Exercise 2:
const colors = ["Red", "Orange", "Yellow", "Green", "Blue"];
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}.`);
}
// Bonus Version:
const colors = ["Red", "Orange", "Yellow", "Green", "Blue"];
const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
    // Determine the correct suffix based on the position
    let suffix = suffixes[i];
    if (i === 0) suffix = "st";
    else if (i === 1) suffix = "nd";
    else if (i === 2) suffix = "rd";
    else suffix = "th";

    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}.`);
}


// Exercise 3:
let number;
 while (true) {
    number = prompt("Enter a number:");
    number = Number(number);
    if (isNaN(number) && number >= 10) {
        break;
    }

    console.log("Invalid input. Please enter a number greater than or equal to 10.");
  }

  console.log(`You entered a valid number: ${number}.`);


// Exercise 4:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log the number of floors in the building
console.log(building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms that they have
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);

// Check if the sum of Sarah's and David's rent is bigger than Dan's rent. If it is, than increase Dan's rent to 1200.
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];
// Check if Sarah's and David's rent is bigger than Dan's rent
if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);


// Exercise 5:
const family = {
    father: "John",
    mother: "Jane",
    son: "Tom",
    daughter: "Anna",
}
for (let key in family) {
    console.log(key);
}
for (let key in family) {
    console.log(family[key]);
  }
 
  
// Exercise 6:
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
 };
let sentence = "";
for (let key in details) {
    sentence += key + " " + details[key] + " ";
}
console.log(sentence.trim());


// Exercise 7:
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let firstLetters = names.map(name => name[0]);
firstLetters.sort();

let societyName = firstLetters.join('');
console.log(societyName);