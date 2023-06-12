// *Q1: 
// 1. Create an array called grades and put the following values: 56, 87, 99, 40

let grades = [56,87,99,40]
console.log (grades)


// 2. Add another element at the end of the array with value: 68

grades.push(68)
console.log(grades)


// 3. Remove the 1st element of the array


grades.splice(0,1);
console.log(grades)

// 4. Change 40 to 60.
grades [3] = 60
console.log(grades)


// 5. Create a variable called average and compute for the average of the grades array.
//     Tip: you can create another variable as a placeholder for the sum first.
arry = [56,87,99,40];

function calculateAverage(array) {
  let total = 0;
  let count = 0;

  array.forEach(function (item, index) {
    total += item;
    count++;
  });

  return total / count;
}
let average = calculateAverage(arry);
console.log(average);



// Q2:
// 1. Create an object called vehicle with following properties:
//     a. name (String)
//     b. brand (String)
//     c. year of make (Number)
//     b. number of wheels (Number)
//     e. isEnvironmentFriendly (Boolean)
// Feel free to put any value.




// 2. Use the for-in loop to display both the properties and values of the object.



