// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly!
// If you get stuck, please leave comments to help us understand your thought process.

//*** ex.)

  // information:

      // "Unicorn" // string Unicorn
      // var bowl = "Unicorn"
      // console.log(bowl);
      // bowl = "Bunny"
      // console.log(bowl);
    bowl = []
    // console.log(bowl);
    bowl.push("Light Blue Dinosaur")
    // console.log(bowl);
    bowl.push("Purple Dinosaur", "Yellow Dinosaur")
    // console.log(bowl);

  // console.log("Kirk, here is your purple dinosaur.");
  // console.log(`Kirk, here is your ${bowl[0]}`);
  // console.log(`Kirk, here is your ${bowl[1]}`);
  // console.log(`Kirk, here is your ${bowl[2]}`);

  // This is donamic coding:
  // Loop

    for (var i = 1; i < bowl.length; i++) {
      console.log(`Kirk, here is your ${bowl[i]}`);
    }

// ****


// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp = 350;
// ^^^ variable 1

// var temp = 42;
// ^^^ variable 2

// var temp = 212;
// ^^^ variable 3

  // if statment will cover all three guidelines and the output options
  if (temp < 212) {
      console.log("42 is below boiling point"); // logged if statment is true

  // else if runs if above statement is false
  } else if (temp === 212) {
      console.log("212 is at boiling point"); // logged if else if statment is true

  // else runs if the previous statements are both false
  } else (temp > 212)
      console.log("350 is above boiling point"); // logged if else statment is true

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
// ^^^ variable one

var myNumbers2 = [8, -7, 42, 9, 13]
// ^^^ variable two

var allMyNumbers = myNumbers1.concat(myNumbers2);
// ^^^ variable 3 - using concat() to combine two arrays

 console.log(allMyNumbers.length);
 // .length to log the length of the array


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"


// After today's talk on functions, the problem became much easier. I was frustrated that I spent a lot of time reading the Syllabus and searching for ways to rearrange the string, but today I am much happier with the outcome!

  // var currentCohort = "Echo 2021"

  // (commented out original variable)

  // I found that using these three methods I can get the "Expected output."
 function reverseString(str) {

    // split() to return a new array
    var spltString = str.split(""); // var splitString = "hello".split("");
    // Check logged output
    // console.log(currentCohort.split(""));

    // reverse() to reverse the characters in the array
    var rvrsArray = spltString.reverse("");

    // Check logged output
      // console.log(rvrsArray);

    // Use the join() to combine letters of an array into a string
    var joinArray = rvrsArray.join("");

    // log the joined array that became a string
    console.log(joinArray);

    // Return the reversed string
    return joinArray;

}

// Call on function above
reverseString("Echo 2021");


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

var myArray = [13, 34, 5, 10, 27, 42]
for (let i = 0; i < myArray.length; i++)

if (myArray[i] % 2 ===0 ) {
  console.log("odd");
} else {
  console.log("even");
}


// --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

var number1 = 58
var number2 = 100

if (number1 < number2){
  console.log(number2 - number1);
} else {
  console.log(number1 - number2);
}
// var number1 = 27
// var number2 = 24
