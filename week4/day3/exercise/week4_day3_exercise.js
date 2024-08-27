// Exercise 1:

function displayNumbersDivisible() {
    let totalSum = 0;
    for (let number = 0; number <= 500; number++) {
        if (number % 23 === 0) {
            console.log(number);
            totalSum += number;
        }
    }
    console.log("Sum:", totalSum);
}
// Call the function
displayNumbersDivisible()
// Bonus:
function displayNumbersDivisible(divisor = 23) {
    let totalSum = 0;
    for (let number = 0; number <= 500; number++) {
        if (number % divisor === 0) {
            console.log(number);
            totalSum += number;
        }
    }
    console.log("Sum:", totalSum);
}

// Example calls
displayNumbersDivisible(3);
displayNumbersDivisible(45);


// Exercise 2:

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}; 

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;
    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];
            stock[item]--; // Decrease the stock by 1 if the item is in stock
        }
    }
    return total;
}
// Call the function
console.log("Total Bill:", myBill());


// Exercise 3:

function changeEnough(itemPrice, amountOfChange) {
    // Define the values of the coins
    const coinValues = [0.25, 0.10, 0.05, 0.01];

    // Calculate the total change available
    let totalChange = 0;
    for (let i = 0; i < amountOfChange.length; i++) {
        totalChange += amountOfChange[i] * coinValues[i];
    }
    // Compare total change to the item price
    return totalChange >= itemPrice;
}

// Example calls
console.log(changeEnough(4.25, [25, 20, 5, 0])); // should return true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // should return false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // should return true


// Exercise 4:

// Hotel costs:
function hotelCost(nights) {
    const costPerNight = 140;
    if (isNaN(nights) || nights <= 0) {
        return "Invalid input. Please enter a valid number of nights.";
    }
    return nights * costPerNight;
}
// Plane ride costs:
function planeRideCost(destination) {
    if (typeof destination !== "string" || destination.trim() === "") {
        return "Invalid input. Please enter a valid destination.";
    }

    destination = destination.toLowerCase();
    if (destination === "london" ) {
        return 183;
    } else if (destination === "paris") {
        return 220;
    } else {
        return 300;
    }
}
// Rental car costs:
function rentalCarCost(days) {
    const costPerDay = 40;
    if (isNaN(days) || days <= 0) {
        return "Invalid input. Please enter a valid number of days.";
    }
    let totalCost = days * costPerDay;
    if (days > 10) {
        totalCost *= 0.95; // 5% discount
    }
    return totalCost;
}  
// Total vacation cost:
function totalVacationCost() {
    let nights = parseInt(prompt("How many nights would you like to stay in the hotel?:"));
    while (isNaN(nights) || nights <= 0) {
        nights = parseInt(prompt("Invalid input. Please enter a valid number of nights:"));
    }
    let destination = prompt("Where would you like to go?:");
    while (typeof destination !== "string" || destination.trim() === "") {
        destination = prompt("Invalid input. Please enter a valid destination:");
    }
    let days = parseInt(prompt("How many days would you like to rent the car?:"));
    while (isNaN(days) || days <= 0) {
        days = parseInt(prompt("Invalid input. Please enter a valid number of days:"));
    }
    
    const hotelCostTotal = hotelCost(nights);
    const planeRideCostTotal = planeRideCost(destination);
    const rentalCarCostTotal = rentalCarCost(days);
    
    const totalCost = hotelCostTotal + planeRideCostTotal + rentalCarCostTotal;

    console.log("The car cost: $${rentalCarTotal}, the hotel cost: $${hotelCostTotal}, the plane tickets cost: $${planeRideTotal}.")
    console.log("Total vacation cost is: $${totalCost}.")
    return totalCost;
}
// Call the function
totalVacationCost()


// Exercise 5:

// Retrieve the div and log it
const container = document.getElementById('container');
console.log(container);

// Change the name “Pete” to “Richard”
const lists = document.querySelectorAll('ul.list'); // Select all <ul> with class 'list'
lists.forEach(list => {
    const pete = list.querySelector('li:nth-of-type(2)'); // Select the second <li>
    if (pete && pete.textContent === 'Pete') {
        pete.textContent = 'Richard';
    }
});

// Delete the second <li> of the second <ul>
const secondUl = lists[1]; // Select the second <ul>
const secondLi = secondUl.querySelector('li:nth-of-type(2)'); // Select the second <li>
if (secondLi) {
    secondLi.remove(); // Remove the <li>
}

// Change the name of the first <li> of each <ul> to your name
const yourName = 'Yehoshua'; 
lists.forEach(list => {
    const firstLi = list.querySelector('li:first-of-type'); // Select the first <li>
    if (firstLi) {
        firstLi.textContent = yourName; // Change the name
    }
});

// Add classes to <ul> elements
lists.forEach(list => {
    list.classList.add('student_list');
});
lists[0].classList.add('university', 'attendance'); // Add additional classes to the first <ul>

// Add styles to <div> and manipulate <li> elements
container.style.backgroundColor = 'lightblue';
container.style.padding = '10px';

const lis = document.querySelectorAll('li'); // Select all <li> elements
lis.forEach(li => {
    if (li.textContent === 'Dan') {
        li.style.display = 'none'; // Hide <li> with text "Dan"
    }
    if (li.textContent === 'Richard') {
        li.style.border = '1px solid black'; // Add border to <li> with text "Richard"
    }
});

// Change font size of the whole body
document.body.style.fontSize = '18px';

// Bonus: Alert if background color of <div> is “light blue”
if (container.style.backgroundColor === 'lightblue') {
    alert(`Hello ${lists[0].firstChild.textContent} and ${lists[1].firstChild.textContent}`);
}


// Exercise 6:

// Get the navBar div
const navBar = document.getElementById('navBar');

// Change the id attribute from 'navBar' to 'socialNetworkNavigation'
navBar.setAttribute('id', 'socialNetworkNavigation');

// Create a new <li> element
const newListItem = document.createElement('li');

// Create a new text node with "Logout"
const logoutText = document.createTextNode('Logout');

// Append the text node to the new <li> element
newListItem.appendChild(logoutText);

// Append the new <li> to the <ul> in the navBar
const ul = navBar.querySelector('ul');
ul.appendChild(newListItem);

// Get and display the text content of the first and last <li> elements
const firstListItem = ul.firstElementChild;
const lastListItem = ul.lastElementChild;

console.log('First link text:', firstListItem.textContent);
console.log('Last link text:', lastListItem.textContent);


// Exercise 7:

// Create an array called allBooks
const allBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https://example.com/mockingbird.jpg",
        alreadyRead: true
    },
    {
        title: "1984",
        author: "George Orwell",
        image: "https://example.com/1984.jpg",
        alreadyRead: false
    }
];

// Get the section where books will be displayed
const listBooksSection = document.querySelector('.listBooks');

// Loop through each book in the array
allBooks.forEach(book => {
    // Create a div to hold the book details
    const bookDiv = document.createElement('div');

    // Create a paragraph to display the book's title and author
    const bookDetails = document.createElement('p');
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    
    // Set the color to red if the book is already read
    if (book.alreadyRead) {
        bookDetails.style.color = 'red';
    }

    // Create an image element for the book's cover
    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.style.width = '100px';  // Set image width to 100px

    // Append the title, author, and image to the div
    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImage);

    // Append the book div to the section
    listBooksSection.appendChild(bookDiv);
});
