// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
  console.log(cohort.length)

// a) Your answer: 8
// b) Verify and explain: After verifying, it was not accurate because I was thinking about it being zero - indexed. 

// --------------------2) What will this log?

var greeting = "Hello World!"
 console.log(greeting[3])

// a) Your answer: l
// b) Verify and explain:
  // The above answer is correct.
  // The code is asking to log the index of the variable "greeting" to the third place.
  // The computer starts at 0 when counting. H = 0, e = 1, l = 2, l = 3


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
  console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain:
  // The above answer is correct.
  // The code is asking to log the index of the variable "languages" with the variable "index set to a value of "1".
  // The computer starts at 0 when counting. JavaScript = 0, Ruby = 1, Python = 2, C++ = 3



// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
  console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAYSUNDAY
// b) Verify and explain:
  // The answer above is not correct.
  // This is what is logged: weekendDays.toUpperCase is not a function
  // When the array is assigned by the variable weekendDays, The computer doesn't know what to log into UpperCase
  // This could be changed if the array was a string "saturday and sunday" without the square brackets or comma.
    // It would then log = SATURDAY AND SUNDAY

// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
  console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain:
  // The answer above is correct.
  // typeof is a way you can check the type of a variable
  // The code is telling the computer to log "typeof" (out of - number, string, or object) of the variable "dataTypes" length
  // We know that the length of the dataTypes variable will be a number.
