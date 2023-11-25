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

// Hint: You should try using a filter method

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

// Hint: You should try using a filter method

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

// Hint:  My one-liner solution had 3 string methods chained together with repeat in the middle.


// Example:

// Input: String - "abc", n = 3
// Output: "abc-abc-abc"
//******************************************************************************************

let str = "ABC"

const repeaterFunc = (str, n) => { 
    
    return n <= 0 ? "" : str.concat('-').repeat(n).slice(0, -1)
 }

console.log(repeaterFunc(str, 3))

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




//******************************************************************************************
// replaceAll() Method: Modifying Phrases in a String
// Objective: Write a function that takes a string and two other strings, oldPhrase and newPhrase. 
//The function should return a new string where all occurrences of oldPhrase are replaced with 
//newPhrase using the replaceAll() method. Ensure the function is case-sensitive and does not alter 
//any other part of the original string.

// Details:
// The function should accurately replace all instances of oldPhrase with newPhrase, maintaining 
//the original string's structure and case sensitivity. Handle edge cases such as empty strings or 
//non-string inputs gracefully.

// Example:

// Input: String - "The quick brown fox jumps over the lazy dog", oldPhrase - "fox", newPhrase - "cat"
// Output: "The quick brown cat jumps over the lazy dog"
//******************************************************************************************




//******************************************************************************************
// indexOf() Method: Finding the Position of a Substring
// Objective: Write a function that takes two strings, mainString and searchString. The function 
//should return the index of the first occurrence of searchString in mainString using the 
//indexOf() method. If searchString is not found in mainString, the function should return -1.

// Details:
// The function should accurately find the position of the first occurrence of searchString in 
//mainString. It should be case-sensitive. Consider edge cases such as empty strings or 
//non-string inputs, and handle them appropriately.

// Example:

// Input: mainString - "Hello world, welcome to the universe.", searchString - "world"
// Output: 6
//******************************************************************************************




//******************************************************************************************
// search() Method: Locating a Pattern in a String
// Objective: Write a function that takes two arguments, mainString and a regular expression 
// pattern. The function should return the index of the first occurrence of a match for pattern 
// within mainString using the search() method. If no match is found, the function should return -1.

// Details:
// Ensure that the function correctly utilizes regular expressions for searching within 
// mainString. The search should be case-sensitive unless the regular expression specifies 
// otherwise. Address edge cases such as non-string inputs or invalid regular expressions.

// Example:

// Input: mainString - "There is a calm before a storm", pattern - /storm/
// Output: 27
//******************************************************************************************




//******************************************************************************************
// charAt() Method: Accessing a Specific Character in a String
// Objective: Write a function that takes a string and an integer index. The function should 
// return the character at the specified index in the string using the charAt() method. If 
// index is out of bounds (i.e., greater than or equal to the length of the string, or negative), 
// the function should return an empty string.

// Details:
// The function should accurately return the character at the given index. It should handle 
// edge cases, such as when index is a non-integer, negative, or out of the string's bounds. 
// The function should not alter the original string.

// Example:

// Input: String - "Hello, World!", index - 7
// Output: "W"
//******************************************************************************************




//******************************************************************************************
// includes() Method: Checking for a Substring Within a String
// Objective: Write a function that takes two strings, mainString and substring. The function 
// should return a boolean value indicating whether mainString includes substring using the 
// includes() method. The search should be case-sensitive.

// Details:
// The function should accurately determine whether substring is present in mainString. Handle 
// edge cases, such as empty strings or non-string inputs, appropriately. The method should 
// return true only if substring is found within mainString and false otherwise.

// Example:

// Input: mainString - "The quick brown fox jumps over the lazy dog", substring - "brown"
// Output: true
//******************************************************************************************




//******************************************************************************************
// lastIndexOf() Method: Finding the Last Occurrence of a Substring
// Objective: Write a function that takes two strings, mainString and searchString. The 
// function should return the index of the last occurrence of searchString in mainString using 
// the lastIndexOf() method. If searchString is not found, the function should return -1.

// Details:
// The function should accurately find the position of the last occurrence of searchString in 
// mainString. It should be case-sensitive. Handle edge cases such as empty strings or non-string 
// inputs appropriately. The function should not alter the original string.

// Example:

// Input: mainString - "Fear leads to anger; anger leads to hate; hate leads to suffering.", searchString - "leads"
// Output: 37
//******************************************************************************************





//******************************************************************************************
// concat() Method: Combining Multiple Strings
// Objective: Write a function that takes an array of strings and returns a single string 
// made by concatenating all the strings in the array using the concat() method. The strings 
// should be combined in the order they appear in the array.

// Details:
// The function should efficiently concatenate multiple strings from an array into one single 
// string. Handle edge cases such as an empty array, arrays with non-string elements, or null 
// values within the array. The function should not alter the original array or its contents.

// Example:

// Input: Array of Strings - ["Hello", " ", "World", "!"]
// Output: "Hello World!"
//******************************************************************************************