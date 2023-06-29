//YOU CAN DECLARE A VARIABLE BY...:
//let
//var
//const

//THIS HOW  YOU CAN CREATE AN ARRAY:
console.log(`this is the original array`)
const numbers = ["1", "2", "3", "4"];
console.log(numbers);
//THESE ARE CALLED ARRAY METHODS (these are only some):
console.log(
  "toString() shows all of the values of an array with a comma between them"
);
console.log(numbers.toString());
console.log(
  "length tells you how many values are in the array (starting with 1 not 0)"
);
console.log(numbers.length);
console.log("length can add an element into an array");
numbers[numbers.length] = "5";
console.log(numbers);
console.log("pop can remove the last value in the array");
numbers.pop;
console.log(numbers);
console.log("pop also tells you what the last value in array is");
console.log(numbers.pop());
console.log("join connects all the values of an array by ...");
console.log(numbers.join(";"));
console.log("includes() identifies whether the array is a (ex. boolean, etc)");
console.log(numbers.includes(Boolean));
console.log("indexOf tells you what index value the value is");
console.log(numbers.indexOf("1"));
console.log("push adds a value to the array");
numbers.push("5");
console.log(numbers);
console.log("shift() removes the first element in the array");
numbers.shift();
console.log(numbers);
console.log("shift() also tells you the first elemenet in the array");
console.log(numbers.shift());
console.log(
  "it adds a new element at the beginning of an array. You can add more than one element"
);
numbers.unshift("0");
console.log(numbers);
console.log("splice adds new elements into an array");
numbers.splice(2, 0, "6", "7"); //2 decides where new elements should be added in this scenario it means after index 2; 0 how many elements shoulf be removed
console.log(numbers);
console.log(
  "splice tells you what element is in position 1 (it does not start with 0)"
);
console.log(numbers.splice(0, 1));
console.log(numbers);
//THESE ARE CONDITIONAL STATEMENTS:
 /*if (condition) {
 block of code to be executed if the condition is true
 }*/

// Use IF to specify a block of code to be executed, if a specified condition is true
let x = 10;
let y = 3;
if (x > y) {
  console.log(true);
}
// Use if else to specify a block of code to be executed, if the same condition is false
x = 10;
y = 3;
if (y > x) {
  console.log(true);
} else console.log(false);
// Use else if to specify a new condition to test, if the first condition is false
x = 10;
y = 3;
let z = 1;
if (y > x) {
  console.log(false);
} else if (z < x) console.log(true);

let password = 12;

if (password === 14){
    console.log("The password is 14");
} else if (password === 13){
    console.log("The password is 13");
} else if (password === 12){
    console.log("The password is 12");
} else{
    console.log("Invalid password");
} 
// Use if if  to specify a new condition to test, if the first condition is tested
x = 10;
y = 3;
z = 1;
if (x > y) {
  console.log(true);
}
if (z < y) console.log(true);

console.log(numbers);
// Use switch to specify many alternative blocks of code to be executed
switch (password) {

  case 14: console.log("The password is 14");
      break;
  case 13: console.log("The password is 13");
      break;
  case 12: console.log("The password is 12");
      break;
  default: console.log("Invalid password");
      break;
}
//USING A FUNCTION
function greet (firstName) {
    return (`Hello ${firstName}`)
}
 greet ("William")
---------------------------------------
 function addTwoNumbers(num1,num2){
    let result = num1 + num2;
    return result
 }
 let c = addTwoNumbers (100, 200)
 console.log (c)
 ------------------------------------------

 function calculator(num1, num2, operator){

    if (typeof num1 !== "number" || typeof num2 !== "number" ){
        throw new Error("The arguments are invalid");
    }

    if(operator==="+"){
        let result = num1 + num2
        return result;

    } else if (operator ==="-"){
        let result = num1 - num2
        return result;

    } else if (operator === "*"){
        let result = num1 * num2
        return result;

    } else if (operator === "/"){
        let result = num1 / num2
        return result;

    } else if (operator === "%"){
        let result = num1 % num2
        return result;

    } else{
        return "You did not input a valid operator"
    }
}

let addition = calculator(12, 15, "+");
let sub = calculator("12d", 15, "-");
let mul = calculator(12, 15, "*");
let div = calculator(12, 15, "/");
let mod = calculator(122, 15, "%");
let other = calculator(12, 15, "p");

console.log(`Addition: ${addition}`);
console.log(`Subtraction: ${sub}`);
console.log(`multiplication: ${mul}`);
console.log(`division: ${div}`);
console.log(`mod: ${mod}`);
console.log(`Other: ${other}`);
-----------------------------------------------
function threeSum (nums, target) 
    let result = false;
    for (let i=0; i< nums.length ; i++){ 
        let firstItem = nums[i]
        for (let j=i+1; j< nums.length; j++){
          let secondItem = nums[j]
          for (let k = j+1; k<nums.length; k++){
            let thirdItem = nums[k]
            if (firstItem + secondItem + thirdItem === target){
                console.log (`firstCompare; ${firstItem}`);
                console.log (`secondCompare; ${secondItem}`);
                console.log (`thirdCompare; ${thirdItem}`);
                return true;
                }
          }
        }
      }
    return result;

let numbersArray2 = [2,11,7,15,10,16,15,1,3];
let targetNumber2 = 37;

let answer2 = threeSum(numbersArray2, targetNumber2);

console.log(answer2)