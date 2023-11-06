//   Write a function that uses the filter() method to return an array of all 
//   books that are currently available.

let library = [
    {title: "Harry Potter", 
        author: "J.K. Rowling", 
        year: 2000, 
        available: true},
    {title: "1984", 
        author: "George Orwell", 
        year: 1949, 
        available: false},
    {title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        year: 1960, 
        available: true},
    {title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        year: 1925, 
        available: false},
    {title: "Moby-Dick", 
        author: "Herman Melville", 
        year: 1851, 
        available: true}
  ];

const availableBooks = library.filter(book => book.available === true)

// console.log(availableBooks)


// *******************************************************************************
// *******************************************************************************
// Write a function that uses the filter() method to return a new array containing 
// only even numbers from the original array.

let numbers = [12, 5, 8, 130, 44, 27, 18, 99, 50, 64];

const evenNumbers = numbers.filter(num => num %2 === 0)

  // console.log(evenNumbers)

// *******************************************************************************
// *******************************************************************************
// Write a function that uses the filter() method to return a new array containing 
// only people who have at least one pet that is older than 3 years.

let people = [
    {
      name: "Alice",
      age: 25,
      pets: [
        {name: "Fido", type: "Dog", age: 3},
        {name: "Fluffy", type: "Cat", age: 2}
      ]
    },
    {
      name: "Bob",
      age: 30,
      pets: [
        {name: "Rex", type: "Dog", age: 5},
        {name: "Whiskers", type: "Cat", age: 1}
      ]
    },
    {
      name: "Charlie",
      age: 35,
      pets: [
        {name: "Spike", type: "Dog", age: 4},
        {name: "Mittens", type: "Cat", age: 3},
        {name: "Goldie", type: "Fish", age: 1}
      ]
    }
  ];
  
const filterPeopleByPetAge = people.filter(person => person.pets.filter(pet =>  pet.age > 3).length > 0)

// console.log(filterPeopleByPetAge)

// *******************************************************************************
// *******************************************************************************
// Write a function that uses the filter() method to return a new array containing 
// only students who passed, where passing is defined as having a grade of 80 or above.
  
let students = [
    {name: 'Alice', grade: 85},
    {name: 'Bob', grade: 76},
    {name: 'Charlie', grade: 92},
    {name: 'Dave', grade: 88},
    {name: 'Eve', grade: 62},
    {name: 'Frank', grade: 75}
  ];
  
const passingStudents = students.filter(student => student.grade >= 80)

// console.log(passingStudents)

// *******************************************************************************
// *******************************************************************************
// Write a function that uses the filter() method to return a new array containing 
// only cars that are from the year 2020 or later, and are priced below $30,000.

let cars = [
    {model: 'Toyota Corolla', year: 2019, price: 15000},
    {model: 'Ford Mustang', year: 2020, price: 30000},
    {model: 'Honda Civic', year: 2021, price: 20000},
    {model: 'Chevrolet Camaro', year: 2022, price: 35000},
    {model: 'Subaru Impreza', year: 2018, price: 18000},
  ];

const affordableCars = cars.filter(car => (car.year >= 2020) && (car.price < 30000))

// console.log(affordableCars)

// Write a function that uses the filter() method to return a new array containing 
// only cars whose model names contain the word 'Toyota' or 'Ford'.

const filterByBrand = cars.filter(car => (car.model.includes('Toyota')) || (car.model.includes('Ford')))

console.log(filterByBrand)
  
  
// *******************************************************************************
// *******************************************************************************
// Write a function that uses the filter() method to return a new array containing 
// only movies that were released in the 21st century (year 2000 and after) and 
// include "Sci-Fi" as one of their genres.

let movies = [
    {title: "Inception", year: 2010, genres: ["Action", "Sci-Fi", "Thriller"]},
    {title: "The Dark Knight", year: 2008, genres: ["Action", "Crime", "Drama"]},
    {title: "Parasite", year: 2019, genres: ["Comedy", "Drama", "Thriller"]},
    {title: "Interstellar", year: 2014, genres: ["Adventure", "Drama", "Sci-Fi"]},
    {title: "The Matrix", year: 1999, genres: ["Action", "Sci-Fi"]},
    {title: "Forrest Gump", year: 1994, genres: ["Drama", "Romance"]},
  ];

  // solution 1 (not so efficient)
const recentSciFiMovies = movies.filter(film =>{
  return film.year >= 2000 && film.genres.filter(genre =>{
    return genre == 'Sci-Fi'
  }).length > 0
})
// console.log(recentSciFiMovies)
  


// solution 2 (most efficient)

function sciFiMoviesIn21stCentury(movies) {
  return movies.filter(movie => movie.year >= 2000 && movie.genres.includes('Sci-Fi'))
}
// console.log(sciFiMoviesIn21stCentury(movies))



// *******************************************************************************
// *******************************************************************************
// Write a function that uses the filter() method to return a new array containing 
// only restaurants that were opened in the 21st century (year 2000 and after) and 
// offer "French" cuisine.

let restaurants = [
    {name: "Chez Panisse", year: 1971, cuisines: ["French", "Californian"]},
    {name: "Noma", year: 2003, cuisines: ["Nordic"]},
    {name: "Osteria Francescana", year: 1995, cuisines: ["Italian"]},
    {name: "Eleven Madison Park", year: 1998, cuisines: ["American", "French"]},
    {name: "Gaggan", year: 2010, cuisines: ["Indian", "Thai"]},
    {name: "El Celler de Can Roca", year: 1986, cuisines: ["Catalan"]},
]

function frenchRestaurantsIn21stCentury(restaurants) {
    return restaurants.filter(restaurant => restaurant.year >= 2000 && restaurant.cuisines.includes("French"))
}

// console.log(frenchRestaurantsIn21stCentury(restaurants))

// *******************************************************************************
// *******************************************************************************
// Write a function that uses nested filter() methods to return an array of people 
// who have "Pizza" among their favorite foods.

let people2 = [
    {name: "John", favoriteFoods: ["Pizza", "Burger", "Pasta"]},
    {name: "Amy", favoriteFoods: ["Salad", "Fruit", "Pasta"]},
    {name: "Robert", favoriteFoods: ["Steak", "Fish", "Rice"]},
    {name: "Jessica", favoriteFoods: ["Pizza", "Pasta", "Ice Cream"]},
    {name: "George", favoriteFoods: ["Pizza", "Fish", "Salad"]},
]
  
function pizzaLovers(people2){
  return people2.filter(person =>{
    return person.favoriteFoods.filter(food =>{
      return food == 'Pizza'
    }).length > 0
  })
}

// console.log(pizzaLovers(people2))
  

// *******************************************************************************
// *******************************************************************************
// Write a function safePizzaLovers() that takes the people array as an argument and 
// uses nested filter() methods to return an array of people who have "Pizza" among 
// their favorite foods and do not have "Dairy" listed in their allergies.

let people3 = [
  {name: "John", favoriteFoods: ["Pizza", "Burger", "Pasta"], allergies: ["Nuts"]},
  {name: "Amy", favoriteFoods: ["Salad", "Fruit", "Pasta"], allergies: ["Dairy"]},
  {name: "Robert", favoriteFoods: ["Steak", "Fish", "Rice"], allergies: ["Gluten"]},
  {name: "Jessica", favoriteFoods: ["Pizza", "Pasta", "Ice Cream"], allergies: ["Fish"]},
  {name: "George", favoriteFoods: ["Pizza", "Fish", "Salad"], allergies: [""]},
]

function safePizzaLovers(people) {
  return people.filter(person => {
    return person.favoriteFoods.includes("Pizza") && !person.allergies.includes("Dairy");
  });
}

// console.log(safePizzaLovers(people3))

// *******************************************************************************
// *******************************************************************************
// Write a function guitarPlayingBeatles(musicians) that takes the musicians array 
// as an argument and uses nested filter() methods to return an array of musicians 
// who have "Guitar" among their instruments and "The Beatles" in their bands.

let musicians = [
  {name: "John", instruments: ["Guitar", "Piano", "Violin"], bands: ["The Beatles"]},
  {name: "Paul", instruments: ["Bass", "Piano"], bands: ["The Beatles", "Wings"]},
  {name: "George", instruments: ["Guitar", "Sitar"], bands: ["The Beatles"]},
  {name: "Ringo", instruments: ["Drums"], bands: ["The Beatles", "Ringo Starr & His All-Starr Band"]},
  {name: "Mick", instruments: ["Vocals", "Harmonica", "Guitar"], bands: ["The Rolling Stones"]},
  {name: "Keith", instruments: ["Guitar", "Vocals"], bands: ["The Rolling Stones"]},
]

function guitarPlayingBeatles(musicians){
  return musicians.filter(musician => {
    return musician.instruments.includes("Guitar") && musician.bands.includes("The Beatles")
  })
}

// console.log(guitarPlayingBeatles(musicians))


// *******************************************************************************
// *******************************************************************************
// Write a function highAchievers(students) that takes the students array as an 
// argument and uses a combination of filter(), reduce(), and other array methods 
// as necessary, to return an array of students who have an average score of 90 
// or above. To find the average score of a student, you will need to sum up their 
// scores and divide by the number of scores. This is where reduce() comes into play.

let students2 = [
  {name: "John", age: 15, scores: [90, 85, 77, 92]},
  {name: "Amy", age: 16, scores: [88, 92, 95, 89]},
  {name: "David", age: 15, scores: [82, 90, 88, 86]},
  {name: "Sarah", age: 17, scores: [95, 98, 99, 94]},
  {name: "James", age: 16, scores: [91, 82, 85, 88]},
]

function highAchievers(students) {
  return students.filter(student => {
    // Use reduce to sum the student's scores
    let total = student.scores.reduce((sum, score) => sum + score, 0);

    // Compute the average
    let average = total / student.scores.length;

    // Return true if the average is 90 or above
    return average >= 90;
  });
}

// console.log(highAchievers(students2));




  

  