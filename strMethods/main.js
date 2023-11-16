//*****************************************************************************************
// slice() method: Basic Extraction
// Task: 
// Given a string "Hello, world!", extract and log the word "Hello" using the slice() method.
//*****************************************************************************************




//*****************************************************************************************
// slice() method: Negative Indices
// Task: 
// Use the slice() method on the string "Frontend Developer" to extract and log the word 
// "Developer". Use negative indices for this task.
//*****************************************************************************************




//*****************************************************************************************
// slice() method: Dynamic Slicing
// Task: 
// Write a function that takes a string and two numbers as arguments. The function should 
// return a substring, extracted using the slice() method, starting from the first number and 
// ending before the second number.
//*****************************************************************************************




//*****************************************************************************************
// trim() method: Basic Trimming
// Objective: Write a function that takes a string with extra spaces at the beginning and end 
// and returns the string with these spaces removed.

// Example:

// Input: " Hello, World! "
// Output: "Hello, World!"
//*****************************************************************************************




//*****************************************************************************************
// toLowerCase() method: Basic Lowercasing
// Objective: Write a function that takes a string and returns it in all lowercase letters.

// Example:

// Input: "HELLO, World!"
// Output: "hello, world!"
//*****************************************************************************************




//*****************************************************************************************
// toUpperCase() method: Basic Uppercasing
// Objective: Write a function that takes a string and returns it in all uppercase letters.

// Example:

// Input: "Hello, world!"
// Output: "HELLO, WORLD!"
//*****************************************************************************************




//*****************************************************************************************
// startsWith() method: Filtering Strings with Specific Start
// Objective: Write a function that takes an array of strings and a search string. The function 
// should return a new array containing only the strings from the original array that start 
// with the specified search string. Use the startsWith() method to perform this check.

// Details:
// The function should be case-insensitive.
// The search string can be of any length.
// If no strings match, return an empty array.

// Example:

// Input: Array - ["apple", "banana", "apricot", "cherry", "mango"], Search String - "ap"
// Output: ["apple", "apricot"]
//*****************************************************************************************




//*****************************************************************************************
// endsWith() method: Matching String Endings
// Objective: Write a function that takes an array of strings and a target ending string. The 
// function should return a new array containing only those strings from the original array 
// that end with the specified target ending. Utilize the endsWith() method for this purpose.

// Details:
// The function should be case-sensitive.
// The target ending string can be of any length.
// If no strings match, the function should return an empty array.

// Example:

// Input: Array - ["hello", "world", "coding", "old", "bold"], Target Ending - "ld"
// Output: ["world", "old", "bold"]
//*****************************************************************************************




//******************************************************************************************
// repeat() method: Creating a Patterned String
// Objective: Write a function that takes a string and an integer n. The function should  
// return a new string where the input string is repeated n times, with each repetition  
// separated by a dash (-). If n is less than or equal to 0, the function should return an 
// empty string.

// Details:
// Ensure that your function handles any edge cases, such as negative numbers or non-integer 
// values for n. The function should not add a trailing dash at the end of the final repetition.

// Example:

// Input: String - "abc", n - 3
// Output: "abc-abc-abc"
//******************************************************************************************




//******************************************************************************************
// split() method: Extracting First and Last Name to Array
// Objective: Write a function that takes a full name as a single string and returns an array 
// with two elements: the first element being the first name and the second element being the 
// last name. Use the split() method to separate the full name into its components. Assume that 
// the full name contains exactly two words: the first name and the last name, separated by a 
// space.

// Example:

// Input: "John Doe"
// Output: ["John", "Doe"]
//******************************************************************************************