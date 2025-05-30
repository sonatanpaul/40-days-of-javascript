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
village = "Paul Para"; //  Error
postCode = 6666; // Error
// Note : const variable can't re-asign allow .
