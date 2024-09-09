const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById('gif-form');
const gifContainer = document.getElementById('gif-container');
const deleteAllBtn = document.getElementById('delete-all-btn');

// Event listner for form submission to get a GIF
form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const category = document.getElementById('category').value;

    if (category) {
        const gifUrl = await fetchGif(category);
        if (gifUrl) {
            displayGif(gifUrl);
        } else {
            alert("No GIF found for the category: " + category);
        }
    }
});

// Fetch GIF from Giphy API
async function fetchGif(category) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}&rating=g`);
        const data = await response.json();
    
        if (response.ok){
            return data.data.images.original.url;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error("There was an error fetching the GIF:", error);
        return null;

    }
}

// Display GIF
function displayGif(gifUrl) {
    const gifDiv = document.createElement('div');
    const img = document.createElement('img');
    const deleteBtn = document.createElement('button');

    img.src = gifUrl;
    img.alt = 'GIF';
    deleteBtn.textContent = 'Delete';

    // Delete button event listener
    deleteBtn.addEventListener('click', function() {
        gifDiv.remove();
    });

    gifDiv.appendChild(img)
    gifDiv.appendChild(deleteBtn);
    gifContainer.appendChild(gifDiv);
}

// Delete all GIFs button event listener
deleteAllBtn.addEventListener('click', function() {
    gifContainer.innerHTML = ''; // Remove all GIFs
});