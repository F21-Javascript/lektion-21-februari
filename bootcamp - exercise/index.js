let people = [
    { age: 10, name: 'Gun-Britt'},
    { age: 20, name: 'Conny'},
    { age: 30, name: 'Aurora'},
    { age: 40, name: 'Kalle'},
    { age: 55, name: 'Max'},
]

/**
 * Övning 3
 */

const sum = people.reduce((previousValue, currentPerson) => {
    return previousValue + currentPerson.age;
}, 0);

console.log(sum);

/**
 * Övning 4
 */

let numbers = [2, 3, 1, 5, 4, 10, 8, 7, 9, 6];

const highestNumber = numbers.reduce((previousValue, currentValue) => {
    if (currentValue > previousValue) {
       previousValue = currentValue;
    }

    return previousValue;
}, 0);

console.log(highestNumber);

/**
 * Övning 6
 */

let isUnderForty = true;

people.map((person) => {
    if (person.age >= 40) {
        isUnderForty = false;
    }
});

console.log(isUnderForty);

/**
 * Övning 7
 */

 let travelDestinations = [
    { name: 'Sweden', continent: 'Europe'},
    { name: 'Norway', continent: 'Europe'},
    { name: 'South Africa', continent: 'Africa'},
    { name: 'Egypt', continent: 'Africa'},
    { name: 'China', continent: 'Asia'},
    { name: 'Japan', continent: 'Asia'},
    { name: 'Australia', continent: 'Oceania / Australia'},
    { name: 'New Zealand', continent: 'Oceania / Australia'},
    { name: 'USA', continent: 'North America'},
    { name: 'Canada', continent: 'North America'},
    { name: 'Mexico', continent: 'North America'},
    { name: 'Brazil', continent: 'South America'},
    { name: 'Argentina', continent: 'South America'},
];

const countryNames = travelDestinations.map((destination) => {
    return destination.name;
});

console.log(countryNames);

const countriesInEurope = travelDestinations.filter((destination) => {
    // if (destination.continent === 'Europe') {
    //     return destination;
    // }
    return destination.continent === 'Europe'; // Kortare variant av ovan
});

console.log(countriesInEurope);

function filterByCountry(query) {
    const searchResult = travelDestinations.filter((destination) => {
        return destination.name === query;
    });

    return searchResult;
}

function filterByContinent(query) {
    const searchResult = travelDestinations.filter((destination) => {
        return destination.continent === query;
    });

    return searchResult;
}

function search(query, filter) {
    let result;

    if (filter === 'land') {
        result = filterByCountry(query);        
    } else if (filter === 'kontinent') {
        result = filterByContinent(query);
    }

    return result;
}

console.log(search('Australia', 'land'));
