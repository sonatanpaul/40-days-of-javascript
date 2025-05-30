// ✅ Task 1: Declare variables for a persons name, age, isStudent status, and favorite programming language.

let name = "Bristi Das";
let age = 26;
let isStudent = true;

// ✅ Task 2: Print the values to the console.
console.log(name); // Bristi Das
console.log(age); // 26
console.log(isStudent); // true

// Task 3: Try reassigning values to let and const variables and observe errors.
// let keyword variables
name = "No Need GF";
age = 28;
isStudent = false;
// result
console.log(name); // No Need GF
console.log(age); // 28
console.log(isStudent); // False

// const keyword variables
const village = "Gobindopur";
const postCode = 6661;

// try re-assigning
// village = "Paul Para"; //  Error
// postCode = 6666; // Error
// Note : const variable can't re-asign allow .

//  Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

// Object declaration
let persons = {
  name: "Paul",
  age: 26,
  isLoser: true,
};
console.log(persons); // {name: 'Paul', age: 26, isLoser: true}

// assign new variables
const newPersons = persons;
console.log(newPersons); // {name: 'Paul', age: 26, isLoser: true}

// modified newPersons value
newPersons.name = "Sonatan Paul";
console.log(newPersons); // {name: 'Sonatan Paul', age: 26, isLoser: true}
console.log(persons); // {name: 'Sonatan Paul', age: 26, isLoser: true}

// Array Declaration :

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// assign new variable
const newNumbars = numbers;
console.log(newNumbars); // [1, 2, 3, 4, 5, 6]

// modified newNumbers value;
newNumbars[6] = 7;
console.log(newNumbars); // [1, 2, 3, 4, 5, 6, 7]
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
