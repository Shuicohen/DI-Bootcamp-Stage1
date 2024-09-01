// Exercise 1:

//1
// 1.1 If you run funcOne() the output will be "inside the funcOne function 3"
// 1.2 If 'a' is const, it will cause an error because const cannot be reassigned.

// 2
// 2.1 
funcThree()  // Prediction: The alert will show "inside the funcThree function 0"
// because 'a' is 0 initially and hasn't been changed yet.
funcTwo()    // This will change the value of 'a' to 5.
funcThree()  // Prediction: The alert will now show "inside the funcThree function 5"
// because 'funcTwo' changes the global 'a' to 5.
// 2.2 If 'a' is const, it will cause an error because const cannot be reassigned.

// 3
// 3.1
funcFour()   // Sets global 'a' to "hello"
funcFive()   // Prediction: "inside the funcFive function hello"

// 4
// 4.1 Output would be "inside the funcSix function test"
// 4.2 If 'a' is const, it will work the same way with no error, as const is also block-scoped.

// 5
// 5.1 Output would be "in the if block 5"; "outside of the if block 2"
// 5.2 If 'a' is const, the result will be the same: "in the if block 5" and "outside of the if block 2".


// Exercise 2:

// Arrow function
const winBattle = () => true;

// Ternary operator to assign value to experiencePoints
const experiencePoints = winBattle() ? 10 : 1;

// Output the result
console.log(experiencePoints);


// Exercise 3:

const isString = value => typeof value === 'string';

// Example usage:
console.log(isString('hello'));        // true
console.log(isString([1, 2, 4, 0]));  // false


// Exercise 4:

const sum = (a, b) => a + b;

// Example usage:
console.log(sum(5, 3));  // Output: 8
console.log(sum(10, 20)); // Output: 30


// Exercise 5:

// Function declaration
function kgToGrams(kg) {
    return kg * 1000;
}
// Invoke the function
console.log(kgToGrams(5)); // Output: 5000

// Function expression
const kgToGrams = function(kg) {
    return kg * 1000;
};
// Invoke the function
console.log(kgToGrams(5)); // Output: 5000

// Arrow function
const kgToGrams = kg => kg * 1000;
// Invoke the function
console.log(kgToGrams(5)); // Output: 5000

// Function declaration is hoisted and can be called before it's defined.
// Function expression is not hoisted; it must be defined before it's used.
// Arrow function is a shorter syntax and has no `this`, `arguments`, `super`, or `new.target`.


// Exercise 6:

// Self-invoking function
(function(numChildren, partnerName, location, jobTitle) {
    // Create the fortune message
    const message = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;

    // Display the message in the DOM
    document.getElementById('fortune').textContent = message;
})(3, 'Alex', 'Paris', 'software developer'); // Example arguments


// Exercise 7:

(function(userName) {
    // Create a new div element for the welcome message
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'welcome';
    
    // Create an image element for the profile picture
    const profilePic = document.createElement('img');
    profilePic.src = 'https://via.placeholder.com/40'; // Placeholder profile picture
    profilePic.alt = 'Profile Picture';
    
    // Create a text node for the user name
    const userNameText = document.createTextNode(userName);
    
    // Append the image and text to the welcome div
    welcomeDiv.appendChild(profilePic);
    welcomeDiv.appendChild(userNameText);
    
    // Append the welcome div to the navbar
    document.getElementById('navbar').appendChild(welcomeDiv);
})('John Doe'); // Example user name


// Exercise 8:

// Part 1:
function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        const message = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
        document.getElementById('juice-bar').textContent = message;
    }

    // Invoke the inner function
    addIngredients('apple', 'banana', 'orange');
}

// Invoke the outer function
makeJuice('medium');


// Part 2:
function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        const message = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        document.getElementById('juice-bar').textContent = message;
    }

    // Invoke addIngredients twice
    addIngredients('apple', 'banana', 'orange');
    addIngredients('mango', 'pineapple', 'strawberry');

    // Invoke displayJuice
    displayJuice();
}

// Invoke the outer function
makeJuice('large');
