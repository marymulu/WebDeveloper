//  Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
//     If the number is divisible by 3, print 'Fizz'.
//     If the number is divisible by 5, print 'Buzz'.
//     If the number is divisible by 3 AND 5, print 'FizzBuzz'.
//     If the number is not divisible by 3 or 5, print 'Pop'.
let number = 49
function fizzBuzz(number) {
      if (number % 3===0 && number % 5 === 0){
        console.log ('FizzBuzz')}
        else if (number % 3 === 0){
        console.log ('Fizz');
      } else if (number % 5 === 0){
        console.log('Buzz');
      } else {
        console.log ('Pop');
      }
    }

fizzBuzz (number)

  
// Use the following test scenarios:
// fizzBuzz(49); //output: Pop
// fizzBuzz(55); //output: Buzz
// fizzBuzz(120); //output: FizzBuzz
// fizzBuzz(9999); //output: Fizz

function fizzBuzz(number) {
      if (number % 3===0 && number % 5 === 0){
        console.log ('FizzBuzz')}
        else if (number % 3 === 0){
        console.log ('Fizz');
      } else if (number % 5 === 0){
        console.log('Buzz');
      } else {
        console.log ('Pop');
      }
    }
    fizzBuzz(49)

//  Q2. Create a function called averager that gets the average of an array. 
    var prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
// let result = averager(prices);
// console.log(result);
function averager(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  return total / prices.length;
}
var prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
let result = averager(prices);
console.log(result);

//  Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 

// celToFah(37.5);
// celToFah(-40);
// celToFah(0);
// celToFah(100);
// celToKel(173.13);
// celToKel(-13);

function celToFah(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

function celToKel(celsius) {
  const kelvin = celsius + 273.15;
  return kelvin;
}

console.log(celToFah(37.5));   // Output: 99.5
console.log(celToFah(-40));    // Output: -40
console.log(celToFah(0));      // Output: 32
console.log(celToFah(100));    // Output: 212
console.log(celToKel(173.13)); // Output: 446.28
console.log(celToKel(-13));    // Output: 260.15


//  Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
// pow(2, 3) -> 2 * 2 * 2 -> 8
function pow(num1,num2){
  let result = 1;
  for (let i = 0; i < num2; i++) {
    result *= num1;
  }
  return result;
}

console.log(pow(2, 3));  // Output: 8


// Note: You can not use Math.pow function. You need to write your own implementation of the function.