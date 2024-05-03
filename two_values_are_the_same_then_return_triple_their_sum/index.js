//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
let a = parseInt(prompt("Enter any number"));
let b = parseInt(prompt("Enter any number"));

function sumforTripple() {
  if (a == b) {
    console.log("Two values are same, that's why it's return triple their sum");
    return 3 * (a + b);
  } else {
    console.log("Two values are not same, that's why it's retur sum");
    return a + b;
  }
}

console.log(sumforTripple());
