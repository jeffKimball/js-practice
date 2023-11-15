// slice() method: Basic Extraction
// Task: 
// Given a string "Hello, world!", extract and log the word "Hello" using the slice() method.

let str1 = "Hello, world!"
console.log(str1.slice(0,5))


// slice() method: Negative Indices
// Task: 
// Use the slice() method on the string "Frontend Developer" to extract and log the word 
// "Developer". Use negative indices for this task.

let str2 = "Frontend Developer"
console.log(str2.slice(-9))

// slice() method: Dynamic Slicing
// Task: 
// Write a function that takes a string and two numbers as arguments. The function should 
// return a substring, extracted using the slice() method, starting from the first number and 
// ending before the second number.

let text = "hippopotamus"

const str3 = (word, startIndex, endIndex) => {
    return word.slice(startIndex, endIndex)
}

console.log(str3(text, 3,6))