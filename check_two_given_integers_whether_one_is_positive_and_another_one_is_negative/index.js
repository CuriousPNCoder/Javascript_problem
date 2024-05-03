//Write a JavaScript program to check two given integers whether one is positive and another one is negative.  
let a = parseInt(prompt("Enter any number"));
let b = parseInt(prompt("Enter any number"));

if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
  console.log("True");
} else {
  console.log("False");
}