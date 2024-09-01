let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    const { fruits } = groceries;
    fruits.forEach(fruit => console.log(fruit));
};

// Invoke the function
displayGroceries();

const cloneGroceries = () => {
    // Create a copy of the client variable
    let user = client;
    
    // Change the client variable
    client = "Betty";
    console.log(`User: ${user}`); // Output: John
    
    // Create a copy of the groceries object
    let shopping = { ...groceries };
    
    // Change the totalPrice key
    shopping.totalPrice = "35$";
    console.log(`Original totalPrice: ${groceries.totalPrice}`); // Output: 20$
    console.log(`Shopping totalPrice: ${shopping.totalPrice}`); // Output: 35$
    
    // Change the paid key
    shopping.other.paid = false;
    console.log(`Original paid: ${groceries.other.paid}`); // Output: false
    console.log(`Shopping paid: ${shopping.other.paid}`); // Output: false
};

// Invoke the function
cloneGroceries();
