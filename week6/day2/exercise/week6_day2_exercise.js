/** Exercise 1 */

const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const query = 'hilarious';
const rating = 'g';
const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&rating=${rating}`;

fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error('HTTP error! status ${response.status}');
    }
    return response.json();
})
.then(data =>{
    console.log('Giphy API Response:', data);
})
.catch(error => {
    console.error('There was an error fetching data:', error);
});


/** Exercise 2 */

const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const query = 'sun';
const rating = 'g';
const limit = 10; // number of gifs to retrieve
const offset = 2; // starting position
const url = `https://api.giphy.com/v1/gifs/search?q=${query}&rating=${rating}&limit=${limit}&offset=${offset}&api_key=${apiKey}`;

fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error('HTTP error! status ${response.status}');
    }
    return response.json();
})
.then(data => {
    console.log('Giphy API Response:', data);
})
.catch(error => {
    console.error('There was an error fetching data:', error);
});


/** Exercise 3 */

async function getStarshipData() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.result);

    } catch (error) {
        console.error('There was a problem fetching the starship data:', error);
    }
}

getStarshipData()


/** Exercise 4 */

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

/** The outcome is: 
 * calling 
 * resolved
*/