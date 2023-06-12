let studentFirstName = "Brandon";
let studentLastName = "N";
let grade1 = 53;
let grade2 = 96;
let grade3 = 65;
let grade4 = 74;
let passingGrade = 80;
//1.Create a variable called average that computes for the average from grade1 to grade4
arry = [53, 96, 65, 74];

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

//2. Change the value of studentLastName to "Newman"
studentLastName = "Newman";
console.log(studentLastName); //output: Newman

//3. Print in console the following statement: "<value of studentFirstName> <value of studentLastName> has an average grade of <value of average>"
console.log("Brandon Newman has an average grade of 72");
//ex. Jane Doe has an average grade of 100.

//4. Write code that would answer this question: Did the student pass?
if (average >= 80) {
  console.log("Pass");
} else {
  console.log("Fail"); //output:fail
}
