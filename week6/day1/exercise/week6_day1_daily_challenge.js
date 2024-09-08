/** 1st challenge */

// Function to make all words uppercase
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      // Check if all elements in the array are strings
      if (words.every(word => typeof word === 'string')) {
        resolve(words.map(word => word.toUpperCase()));
      } else {
        // If not all elements are strings, reject with an error message
        reject('Some elements are not strings');
      }
    });
  }

// Function to sort the words if the array length is greater than 4
function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            resolve(words.sort());
        } else {
            reject('Array length is not greater than 4');
        }
    });
}

// Test cases
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result)) // ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]
  .catch(error => console.log(error));



/** 2nd challenge */

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
// 1. Convert morse JSON string to morse JavaScript object
function toJs() {
    return new Promise((resolve, reject) => {
        try {
            const morseObject = JSON.parse(morse);
            if (Object.keys(morseObject).length === 0) {
                reject('Morse object is empty');
            } else {
                resolve(morseObject);
            }
        } catch (error) {
            reject("Failed to parse morse JSON");
        }
    });
}

// 2. Convert a word or sentence to morse code array
function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const userInput = prompt("Enter a word or sentence:");
        if (!userInput) {
            reject("No input provided");
            return;
        }
        const morseTranslation = [];
        for (const char of userInput.toLowerCase()) {
            if (morseJS[char]) {
                morseTranslation.push(morseJS[char]);
            } else {
                reject(`Character "${char}" does not exist in the morse object`);
                return;
            }
        }
        resolve(morseTranslation);
    });
}

// 3. Join morse code array and display it on the page
function joinWords(morseTranslation) {
    return new Promise((resolve) => {
        const morseString = morseTranslation.join('\n');
        document.body.innerHTML = `<pre>${morseString}</pre>`;
        resolve(morseString);
    });
}

// Chain the functions
toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => {
        console.log('Error:', error);
        document.body.innerHTML = `<pre>Error: ${error}</pre>`;
    });
    