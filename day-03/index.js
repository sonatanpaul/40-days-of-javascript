console.log("Hello JavaScript");

// Operator =>  Symobls + - / *
// Operands =>  x + y ( x and y is operands)
// Expression  =>  x + y
// Example : let number = 4 + 5

// Arithmetic Operator :
// Number Data Type
let a = 10;
let b = 20;

console.log(a + b); // 30
console.log(a - b); // - 10
console.log(b - a); // 10
console.log(a * b); // 200
console.log(a / b);

// String Data Type
let f_name = "sonatan";
let l_name = "paul";
console.log(f_name + l_name); // sonatanpaul
let num1 = "20";
let num2 = "30";
console.log(num1 + num2);

{
  let a = 2;
  let b = 3;
  console.log(a ** b); // 2*2*2 = 8
}

// Riminder Operator
{
  let num1 = 12;
  let num2 = 5;
  console.log(num1 % num2); // 2
}

{
  // post increment
  let count = 5;
  console.log(count); // 5
  console.log(count++); // count = count + 1
  console.log(count); // 6
}

{
  // pre increment
  let count = 5;
  console.log(count); // 5
  console.log(++count); // 6
  console.log(count);
  console.log(count++); // 6
  console.log(count); // 7
  console.log(++count); // 8
}

// Assignment Operator

let x = 10;
console.log(x); // 10
x += 5; //  x = x + 5
console.log(x); //  15
x -= 3; //  x = x - 3
console.log(x); // 12
x *= 2; // x = x * 2
console.log(x); // 24
x /= 4; // x = x / 4
console.log(x); // 6

