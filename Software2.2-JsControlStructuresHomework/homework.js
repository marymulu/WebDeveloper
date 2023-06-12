//Write JS code that solve the following problems
//Q1. Using an if-else statement, determine if a number is divisible by 3, by 5, or both.

let q1test = 15;

//Add code here

if (15 % 3 === 0) {
    console.log ('3 is divisible by 15')
  }  if (15 % 5 === 0) {
    console.log ('5 is divisible by 15')
  }  if (15 % 3 === 0 && 15 % 5 === 0) {
    console.log('3 and 5 are divisible by 15');
  }
  
//Q2. Using an if-else statement, determin is a year is a leap year or not.
//Research what are the conditions to be considered a leap year.

let year = 1999;
// let year = 2000;
// let year = 1900;
// let year = 2024;

//Add code here
if (1999 % 4 === 0) {
    console.log ('1999 is a leap year')
  } if (2000 % 4 === 0) {
    console.log ('2000 is a leap year')
  }  if (1900 % 4 === 0) {
    console.log ('1900 is a leap year')
  }  if (2024 % 4 === 0) {
    console.log ('2024 is a leap year')
  }

//Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.

//Add code here
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 4 === 0) {
      console.log(i);
    }
  }
  