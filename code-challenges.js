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

// var temp = 350
// var temp = 212


// var temp = 42
// var boilingPoint = 212;;
//
// let num = 42;
// if(num <= 212 {
//   console.log("Your number is a perfect square!");
// }
// console.log();
  // && num => 211)

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// var myNumbers1 = [3, 7, 0, 36, -9]
// var myNumbers2 = [ 8, -7, 42, 9, 13]
//
// console.log(myNumbers1 + myNumbers2);

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"


// After spending over an hour on this one problem and logging each step, I didn't realize that my variable I had defined didn't matter (commented out below). The solution was not dynamic and I was frustrated that I spent a lot of time reading the Syllabus and searching for ways to rearrange the string.

  // var currentCohort = "Echo 2021" (commented out original variable)

  // I found that using these three methods I can get the "Expected output."
 function reverseString(str) {

    // split() to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // Check logged output
    // console.log(currentCohort.split(""));

    // reverse() to reverse the characters in the array
    var reverseArray = splitString.reverse("");

    // Check logged output
      // console.log(reverseArray);

    // Use the join() to combine letters of an array into a string
    var joinArray = reverseArray.join("");

    // log the joined array that became a string
    console.log(joinArray);

    // Return the reversed string
    return joinArray;

}

// Call on function above
reverseString("I am Hannah");




// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

var myArray = [13, 34, 5, 10, 27, 42]



// --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

var number1 = 58
var number2 = 100

// var number1 = 27
// var number2 = 24
