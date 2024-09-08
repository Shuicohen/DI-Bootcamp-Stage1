/** Exercise 1 */

function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} is less than or equal to 10`);
        } else {
            reject(`${num} is greater than 10`);
        }
    });
}

// Test cases
// This should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// This should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));


/** Exercise 2 */

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});

// Test the promise
myPromise.then(result => console.log(result));


/** Exercise 3 */

const resolvedPromise = Promise.resolve(3);
//  Test the resolved promise
resolvedPromise.then(result => console.log(result));

const rejectedPromise = Promise.reject("Boo!");
//  Test the rejected promise
rejectedPromise.catch(result => console.log(result));