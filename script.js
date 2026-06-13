//this is sting variable
let js = "amazing";
let myFirstJob = "Programmer";
let country = "Bangladesh";
let continent = "Asia";
let population = "108 million people";

//this is number variable
let PI = 3.1415;

//this is undefined variable
let language;

// this is boolean  variable
let isIsland = false;
let javaScriptIsFun = true;

// there are three different way to declare a variable
// var | var key word is old way to declare a variable
// let | let is reassign able variable | this is mutate , mean it is changeable.
// const | const is a immutable variable that can not be reassigned in future

// Basic math operator
const now = 2026;
const ageAminul = now - 2003;
const ageKhadijah = now - 2025;
// = this a assignment operator
let x = 12 + 21;
x += 12; // this is addition assignment operator : x = + 12
x -= 12; // this is subtraction assignment operator : x = - 12
x *= 12; // this is multiplication assignment operator : x = * 12
x++; // this is postfix increment operator : x = x + 1
x--; // this is postfix decrement operator : x = x - 1

// comparison operator
// console.log(ageAminul < ageKhadijah);
// console.log(ageAminul > ageKhadijah);
// <= less than or equal to
// >= greater than or equal to

//Operator Precedence
// all math operator executed before comparison operator
// grouping () operator has highest power in all of the operator
//let averageAge = ageAminul + ageKhadijah / 2;  this will give unexpected result because multiplication execute first then subtraction so it will give unexpected result
//console.log(averageAge);  23.5

let averageAge = (ageAminul + ageKhadijah) / 2;
//console.log(averageAge);  this is the right way to get excepted result : 12 , because () grouping has highest power and it execute first so first ageAminul + ageKhadijah wil subtraction then will divided with 2

//JavaScript Fundamentals – Part 1 | Coding Challenge #1
let johnMass = 92;
let markMass = 78;
let johnHeightInMeter = 1.69;
let markHeightInMeter = 1.95;
const johnBMI = johnMass / (johnHeightInMeter * johnHeightInMeter);
const markBMI = markMass / (markHeightInMeter * markHeightInMeter);
// console.log("this is John BMI:", johnBMI);
// console.log("this is Mark BMI:", markBMI);

// string and template literals
let firstName = "aminul";
let age = 23;
let job = "programmer";
// console.log("My name is " + firstName + " " + "I am " + age + "year old");

// taking decision if else condition
const sarahAge = 15;
const isOldEnough = sarahAge >= 18;
if (isOldEnough) {
  //   console.log("Sarah can start driving license 🪪");
} else {
  const yearLeft = 18 - sarahAge;
  //   console.log(`${yearLeft} year left to start driving license 🪪`);
}
// if else statement is also called control structure

// type conversion and coercion

// type conversion
// type of nan is number
const inputYear = "1991";
// console.log(Number(inputYear));

// type coercion
// console.log("23" - 34 - 9);
// console.log("23" + 34 + 9);
//type coercion mean: when we want to operate 2 values of different types , javaScript quietly convert one of the them type so it can go through;
// example :
let n = "1" + 1;
n = n - 1;
// console.log(n);
// here is '1' is a string so when we operate this line javascript count as it is a string thats why it become '1' + 1 = 11

// truthy and falsy value;
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean({}));

let money = 100;
if (money) {
  console.log("Do not spend it all :)");
} else {
  console.log("You should get a job!");
}
