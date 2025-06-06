// console.log("Learn Object Day - 12");

/*
console.log(typeof {}); // object
console.log(typeof []); // object but called array
*/

// declare object
{
  const user = {
    name: "Sonatan",
    age: 26,
  };

  // access object property
  console.log(user.name); // Sonatan
  console.log(user.age); // 26

  // Add new property Object :
  user.isSeniorCitizen = false;
  console.log(user); // {name: 'Sonatan', age: 26, isSeniorCitizen: false}
  // add another user object property
  user.anyFriends = false;
  console.log(user); // {name: 'Sonatan', age: 26, isSeniorCitizen: false, anyFriends: false}
}

// key with specail characters
{
  const person = {
    name: "Paul",
    age: 26,
    "is Admin": true,
  };

  console.log(person);
  // special characters access braket notation
  console.log(person["is Admin"]); // true

  //   add object property with special characters
  person["ex-Name"] = "Afrin Momo";
  console.log(person); // {name: 'Paul', age: 26, is Admin: true, ex-Name: 'Afrin Momo'}
  //   now access ex-name
  // console.log(person.'ex-Name') //error
  // note : only special characters key access allowed bracket notation :
  console.log(person["ex-Name"]); // Afrin Momo
}

// Modified or Update Object property :

// Dot Notation :
{
  const user = {
    name: "Paul",
    age: 26,
  };
  console.log(user); // {name: 'Paul', age: 26}
  console.log(user.name); // Sonatan
  console.log(user.age); // 26
  //update object age property
  user.age = 30;
  console.log(user); // {name: 'Paul', age: 30}
  console.log(user.age); // 30
  // update object name property
  user.name = "Sonatan Paul";
  console.log(user); // {name: 'Sonatan Paul', age: 30}
  console.log(user.name); // Sonatan Paul
}

// Barcket Notation
{
  const user = {
    "user-name": "Mr Sonatan",
    "user age": 26,
  };
  console.log(user); // {user-name: 'Mr Sonatan', user age: 26}
  console.log(user["user-name"]); // Mr Sonatan
  console.log(user["user age"]); // 26
  // update user (user-name) property
  user["user-name"] = "Sonatan Paul";
  user["user age"] = 30;
  console.log(user); // {user-name: 'Sonatan Paul', user age: 30}
  console.log(user["user-name"]); // Sonatan Paul
  console.log(user["user age"]); // 30
}

{
  // delete object property

  const user = {
    name: "Sonatan",
    age: 26,
    country: "Bangladesh",
  };
  console.log(user); // {name: 'Sonatan', age: 26, country: 'Bangladesh'}
  // delete country property
  delete user.country;
  console.log(user); // {name: 'Sonatan', age: 26}
  delete user["age"];
  console.log(user); // {name: 'Sonatan'}
}
