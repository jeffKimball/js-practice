// Exercise #1
// Your task: Using the map() function, create a new array that transforms this 
// data into an array of strings where each string is a sentence that reads 
// "The book [title] was written by [author] and published in [publishedYear]."
const books_1 = [
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        publishedYear: 1954
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publishedYear: 1960
    },
    {
        title: '1984',
        author: 'George Orwell',
        publishedYear: 1949
    }
];



// const books_1_ans_1 = books_1.map(book=> {
    // solution
// })

// console.log(books_1_ans_1);

// ********************************************************************************
// ********************************************************************************

// Exercise #2
// Your new task: Using the map() function, create a new array that transforms 
// this data into an array of objects. Each object should have a title property 
// (which should remain the same), an authorLastName property (which should be 
// the author's last name only), and a ageIn2023 property (which is how old the 
// book is in 2023).



// const books_1_ans_2 = books_1.map(book=> {
    // solution
// })

// console.log(books_1_ans_2)

// ********************************************************************************
// ********************************************************************************

// Exercise #3
// Your task: Using the filter() function, create a new array that only includes 
// books that were published before the year 1960. Then, use the map() function 
// to transform this data into an array of strings where each string is the title 
// of the book followed by its author's last name in parentheses. For example, 
// the string for the book '1984' would be '1984 (Orwell)'.

// Remember, filter() and map() are both non-mutating methods that return a new array,
// and they can be chained together in one line. You can call filter() first to create 
// the filtered array, and then call map() on the result to create the final array of 
// strings.



// const books_1_ans_3 = () = {
    // solution
// })

// console.log(books_1_ans_3());


// *********************************************************************************
// *********************************************************************************
// Your task: Using the map() function, create a new array that transforms this data into 
// an array of objects where each object contains the book title and the reading time 
// based on the number of pages. Assume an average reading speed of one page per minute.

// Each object in your new array should have this structure: { title: 'book title', 
// readingTime: 'XX hours and YY minutes' }. Remember, reading time should be expressed 
// in hours and minutes, not just minutes. You need to perform the conversion from minutes
// to hours and minutes.

let books_2 = [
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        publishedYear: 1954,
        pages: 1200
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publishedYear: 1960,
        pages: 281
    },
    {
        title: '1984',
        author: 'George Orwell',
        publishedYear: 1949,
        pages: 328
    }
];



// const books_2_ans_1 = books_2.map(book=> {
    // solution
// })

// console.log(books_2_ans_1)



// *********************************************************************************
// *********************************************************************************
// Your task: Create a new array that transforms this data into an array of objects 
// where each object contains the book title and the average rating for that book, 
// rounded to two decimal places.

// To compute the average rating, you'll need to use the reduce() method to add up 
// the ratings and then divide by the number of ratings. 

// Each object in your new array should have this structure: { title: 'book title', 
// averageRating: 'average rating' }.

let books_3 = [
    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        publishedYear: 1954,
        ratings: [5, 5, 5, 4.5, 5, 4.8]
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publishedYear: 1960,
        ratings: [4.5, 4.6, 5, 4.7, 4.8, 5]
    },
    {
        title: '1984',
        author: 'George Orwell',
        publishedYear: 1949,
        ratings: [4.2, 4.5, 4, 4.6, 4.7, 4.5]
    }
];



// const books_3_ans_1 = books_3.map(book=> {
    // solution
// })

// console.log(books_3_ans_1)


// *************************************************************************
// *************************************************************************
// Your task is to use the map() function to create a new array where each element 
// is an object that contains a student's name and their highest score. The structure 
// of the object should be: { name: 'name', highestScore: 'highest score' }.

let students_1 = [
    { name: 'John', scores: [89, 76, 92, 85] },
    { name: 'Jane', scores: [85, 90, 82, 94] },
    { name: 'Jill', scores: [92, 90, 85, 88] },
    { name: 'Jim', scores: [70, 65, 80, 75] }
];



// const students_1_ans_1 = students_1.map(book=> {
    // solution
// })

// console.log(students_1_ans_1)


// Your task: Use the map() function to create a new array where each element is an 
// object that contains the following information about each student:

// Name
// Average score
// Highest score
// Lowest score
// Attendance rate (as a percentage)
// A boolean flag hasPerfectAttendance indicating students with no days missed

let students_2 = [
    { name: 'John', scores: [89, 76, 92, 85], attendance: [true, true, false, true] },
    { name: 'Jane', scores: [85, 90, 82, 94], attendance: [true, false, true, false] },
    { name: 'Jill', scores: [92, 90, 85, 88], attendance: [true, true, true, true] },
    { name: 'Jim', scores: [70, 65, 80, 75], attendance: [false, false, true, true] }
];

// const students_2_ans_1 = students_2.map(book=> {
    // solution
// })

// console.log(students_2_ans_1)
