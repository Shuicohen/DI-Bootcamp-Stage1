const characterInfo = document.getElementById('characterInfo');
const errorMessage = document.getElementById('errorMessage');
const loadingMessage = document.getElementById('loadingMessage');
const button = document.getElementById('getCharacterButton');

button.addEventListener('click', () => {
    // Show loading animation
    loadingMessage.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    characterInfo.classList.add('hidden');

    // Generate a random character ID (1-83)
    const randomId = Math.floor(Math.random() * 83) + 1;

    fetch(`https://www.swapi.tech/api/people/${randomId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Character not found');
            }
            return response.json();
        })
        .then(data => {
            const character = data.result.properties;

            // Hide loading message and error message
            loadingMessage.classList.add('hidden');
            errorMessage.classList.add('hidden');

            // Populate the character information
            document.getElementById('name').textContent = character.name;
            document.getElementById('height').textContent = character.height;
            document.getElementById('gender').textContent = character.gender;
            document.getElementById('birthYear').textContent = character.birth_year;

            // Fetch the home world
            return fetch(character.homeworld);
        })
        .then(response => response.json())
        .then(homeworldData => {
            const homeworld = homeworldData.result.properties;
            document.getElementById('homeworld').textContent = homeworld.name;

            // Show character information
            characterInfo.classList.remove('hidden');
        })
        .catch(error => {
            // Hide loading message and show error message
            loadingMessage.classList.add('hidden');
            errorMessage.classList.remove('hidden');
        });
});
