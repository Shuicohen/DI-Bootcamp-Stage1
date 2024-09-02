const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

// Function to get the first Honda car
function getCarHonda(carInventory) {
    // Using the find() method to get the first Honda car
    const carHonda = carInventory.find(car => car.car_make === 'Honda');
    if (carHonda) {
        return `This is a${carHonda.car_make} ${carHonda.car_model} from ${carHonda.car_year}`;
    }
        return 'No Honda car found';
}

// Function to sort the inventory by year
function sortByYear(carInventory) {
    return carInventory.sort((a, b) => a.car_year - b.car_year);
}

console.log(getCarHonda(inventory));
console.log(sortByYear(inventory));