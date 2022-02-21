let todos = [
    { task: 'Köp kaffe' },
    { task: 'Köp tidning' },
    { task: 'Brygg kaffe' },
    { task: 'Drick kaffe' }
]

let numbers = [1, 2, 3, 4, 5];

// ----------- MAP --------------

// Visuell förklaring av map-metoden
function mapTest(callback) {
    for(let i = 0; i < todos.length; i++) {
        callback(todos[i]);
    }
}

todos.map((todo, index) => {
    console.log(todo);
    console.log(index);
    todo.id = index; // Här opererar vi på ett objekt och behöver inte göra return då
});

console.log(todos);

let doubledNumbers = numbers.map((number) => {
    return number * 2; // Här multiplicerar vi med 2 och får ett nytt nummer som vi behöver returnera
});

console.log(numbers);
console.log(doubledNumbers);

// ----------- REDUCE --------------

let inititalValue = 0;

let sum = numbers.reduce((previousValue, currentValue) => {
    console.log('previousValue:', previousValue);
    console.log('currentValue:', currentValue);
    return previousValue + currentValue;
}, inititalValue);

console.log(sum);

// ----------- FILTER --------------

let persons = [
    { name: 'Ada', age: 28 },
    { name: 'Alice', age: 14 },
    { name: 'Christopher Robin', age: 12 },
    { name: 'Glenn', age: 47 }
]

let filteredPersons = persons.filter((person) => {
    if (person.age > 20) {
        return person;
    }
});

console.log(filteredPersons);