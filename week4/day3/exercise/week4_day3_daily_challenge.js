// Array of planets and their moons
const solarSystem = [
    { name: "Mercury", color: "gray", moons: [] },
    { name: "Venus", color: "yellow", moons: [] },
    { name: "Earth", color: "blue", moons: ["Moon"] },
    { name: "Mars", color: "red", moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", color: "orange", moons: ["Io", "Europa", "Ganymede", "Callisto"] },
    { name: "Saturn", color: "goldenrod", moons: ["Titan", "Enceladus"] },
    { name: "Uranus", color: "lightblue", moons: ["Miranda", "Ariel", "Umbriel"] },
    { name: "Neptune", color: "darkblue", moons: ["Triton"] }
];

// Get the section where planets will be displayed
const listPlanetsSection = document.querySelector('.listPlanets');

// Loop through each planet in the solar system array
solarSystem.forEach(planet => {
    // Create a div for each planet
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;

    // Add moons for the planet
    planet.moons.forEach((moon, index) => {
        const moonDiv = document.createElement('div');
        moonDiv.classList.add('moon');
        // Position moons around the planet
        moonDiv.style.left = `${120 + index * 40}px`;
        moonDiv.style.top = `${20 + index * 20}px`;
        planetDiv.appendChild(moonDiv);
    });

    // Append the planet div to the section
    listPlanetsSection.appendChild(planetDiv);
});
