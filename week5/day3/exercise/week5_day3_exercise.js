/** Exercise 1 */

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//The output would be "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"


/** Exercise 2 */

function displayStudentInfo({ first, last }) {
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));


/** Exercise 3 */

const users = { 
    user1: 18273, 
    user2: 92833, 
    user3: 90315 
};
const usersArray = Object.entries(users);
console.log(usersArray);

const updatedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
console.log(updatedUsersArray);


/** Exercise 4 */

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
  
// The output would be "object"


/** Exercise 5 */

class Dog {
    constructor(name) {
      this.name = name;
    }
  };

// The correct choice is:
// 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


/** Exercise 6 */

// 1.
[2] === [2] // false
{} === {} // false

// 2.
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); // Output: 4 (because object2 references object1, and object1.number was changed to 4)
console.log(object3.number); // Output: 4 (same reason as object2)
console.log(object4.number); // Output: 5 (because object4 is a separate object, independent of object1)



